import { useEffect, useState, useRef } from "react";
import { StrudelMirror } from "@strudel/codemirror";
import { evalScope } from "@strudel/core";
import { initAudioOnFirstClick } from "@strudel/webaudio";
import { transpiler } from "@strudel/transpiler";
import {
  getAudioContext,
  webaudioOutput,
  registerSynthSounds,
} from "@strudel/webaudio";
import { registerSoundfonts } from "@strudel/soundfonts";
import * as d3 from "d3";
import { ProcAndPlay, setGlobalEditor } from "../../Processors";
import console_monkey_patch, { getD3Data } from "../../console-monkey-patch";

export default function Graph({ musicInput }) {
  const hasRun = useRef(false);
  const [bassTiming, setBassTiming] = useState("");
  const [bassArray, setBassArray] = useState([]);
  const maxItems = 20;
  const timeout = 500;
  const maxValue = 60;

  useEffect(() => {
    if (!hasRun.current) {
      hasRun.current = true;
      //Code copied from example: https://codeberg.org/uzu/strudel/src/branch/main/examples/codemirror-repl
      //init canvas
      const svg = d3.select("#rng-graph");
      svg.selectAll("*").remove();
      const drawTime = [-2, 2]; // time window of drawn haps
      // Setting default value for global editor
      setGlobalEditor(
        new StrudelMirror({
          defaultOutput: webaudioOutput,
          getTime: () => getAudioContext().currentTime,
          transpiler,
          root: document.getElementById("editor"),
          drawTime,
          prebake: async () => {
            initAudioOnFirstClick(); // needed to make the browser happy (don't await this here..)
            const loadModules = evalScope(
              import("@strudel/core"),
              import("@strudel/draw"),
              import("@strudel/mini"),
              import("@strudel/tonal"),
              import("@strudel/webaudio")
            );
            await Promise.all([
              loadModules,
              registerSynthSounds(),
              registerSoundfonts(),
            ]);
          },
        })
      );
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      console_monkey_patch();
      let d3data = getD3Data();
      if (d3data != null && d3data.length > 0) {
        d3data.forEach((d) => {
          let updatedBassTiming = d.split(" ")[2].slice(0, -1); // remove :
          setBassTiming(updatedBassTiming);
        });
      }
    }, timeout);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (bassTiming !== "") {
      setBassArray((prevArray) => {
        let validateBassTiming = parseFloat(bassTiming);
        // e.g. 1/4 = 0.25
        if (validateBassTiming > maxValue) {
          // cant be more than 60
          validateBassTiming = maxValue;
        }
        let newBassArray = [...prevArray, validateBassTiming];

        if (newBassArray.length > maxItems) {
          newBassArray.shift(); // Remove the oldest item to maintain the size
        }
        return newBassArray;
      });
    }
  }, [bassTiming]);
  console.log("bassArray", bassArray);
  useEffect(() => {
    //Select SVG Element
    let svg = d3.select("#rng-graph");
    svg.selectAll("*").remove();

    //Set the Width and Height
    let w = svg.node().getBoundingClientRect().width;
    w -= 40; //Padding
    let h = svg.node().getBoundingClientRect().height;
    h -= 25; //Padding
    const barMargin = 10;
    const barWidth = w / bassArray.length;

    //Create yScale
    let yScale = d3.scaleLinear().domain([0, maxValue]).range([h, 0]);

    //Select groups
    let barGroups = svg.selectAll("g").data(bassArray);
    const chartGroup = svg
      .append("g")
      .classed("chartGroup", true)
      .attr("transform", "translate(30, 3)");

    // Bar Graph (Comment if you want lines only or vice versa)
    //Add groups
    let newBarGroups = barGroups
      .enter()
      .append("g")
      .attr(
        "transform",
        (d, i) => `translate(${i * barWidth + 30}, ${yScale(d)})`
      );

    //Draw some rectangles
    newBarGroups
      .append("rect")
      .attr("x", 0)
      .attr("height", (d) => {
        return h - yScale(d);
      })
      .attr("width", barWidth - barMargin)
      .attr(
        "fill",
        (d, i) =>
          `rgb(${(360 / maxValue) * d + 1}, ${
            360 - ((360 / maxValue) * d + 1)
          }, 60)`
      );

    // https://d3-graph-gallery.com/graph/line_color_gradient_svg.html for reference
    // Setting the color gradient
    chartGroup
      .append("linearGradient")
      .attr("id", "line-gradient")
      .attr("gradientUnits", "userSpaceOnUse")
      .attr("x1", 0)
      .attr("y1", yScale(0))
      .attr("x2", 0)
      .attr("y2", yScale(maxValue))
      .selectAll("stop")
      .data([
        // blue to limegreen to red :)
        { offset: "0%", color: "blue" },
        { offset: "50%", color: "limegreen" },
        { offset: "100%", color: "red" },
      ])
      .enter()
      .append("stop")
      .attr("offset", (d) => d.offset)
      .attr("stop-color", (d) => d.color);

    // y-axis
    let yAxis = d3.axisLeft(yScale);
    chartGroup.append("g").classed("axis y", true).call(yAxis);
  }, [bassArray]);

  return (
    <div className="container text-center pb-1">
      <h1
        className="btn btn-outline-primary"
        onClick={() => ProcAndPlay(musicInput)}
      >
        {bassTiming === ""
          ? "D3 Bassline Timing! Press Play To See Bass Move!"
          : `Bass Timing: ${bassTiming}`}
      </h1>
      <div className="row">
        <svg
          id="rng-graph"
          width="100%"
          height="100%"
          className="border border-primary rounded p-2"
        ></svg>
      </div>
    </div>
  );
}

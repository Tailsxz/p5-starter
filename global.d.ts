import * as p5Global from "p5/global";
import module = require("p5");

declare global {
  interface Window {
    setup: Function;
    draw: Function;
  }
}

export = module;
export as namespace p5;

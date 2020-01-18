import { registerApplication, start } from "single-spa";
import * as isActive from "./activity-functions";
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

registerApplication(
  "@vue-mf/navbar",
  () => System.import("@vue-mf/navbar"),
  isActive.navbar
);

registerApplication(
  "@vue-mf/dogs-dashboard",
  () => System.import("@vue-mf/dogs-dashboard"),
  isActive.dogsDashboard
);

registerApplication(
  "@vue-mf/rate-dogs",
  () => System.import("@vue-mf/rate-dogs"),
  isActive.rateDogs
);

start();

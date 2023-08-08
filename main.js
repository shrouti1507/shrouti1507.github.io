// main.js
import {
    updateRudderAnalytics,
    cacheValues,
    populateCachedValues,
    handleTrackScenario,
    handleIdentifyScenario,
    handlePageScenario,
    handleGroupScenario,
    handleAliasScenario,
    updateFunctionBodies
} from './util.js';

window.updateRudderAnalytics = () => {
    updateRudderAnalytics();
};
window.cacheValues = () => {
    cacheValues();
};
// Populate the text boxes with cached values on page load
document.addEventListener("DOMContentLoaded", function () {
    populateCachedValues();
});

// Add event listeners to the select elements
document.getElementById("track").addEventListener("change", function () {
    const selectedScenario = document.getElementById("track").value;
    handleTrackScenario();
    updateFunctionBodies("track", selectedScenario);
});

document.getElementById("identify").addEventListener("change", function () {
    const selectedScenario = document.getElementById("identify").value;
    handleIdentifyScenario();
    updateFunctionBodies("identify", selectedScenario);
});

document.getElementById("page").addEventListener("change", function () {
    const selectedScenario = document.getElementById("page").value;
    handlePageScenario();
    updateFunctionBodies("page", selectedScenario);
});

document.getElementById("group").addEventListener("change", function () {
    const selectedScenario = document.getElementById("group").value;
    handleGroupScenario();
    updateFunctionBodies("group", selectedScenario);
});

document.getElementById("alias").addEventListener("change", function () {
    const selectedScenario = document.getElementById("alias").value;
    handleAliasScenario();
    updateFunctionBodies("alias", selectedScenario);
});

document.getElementById("ecommerce").addEventListener("change", function () {
    const selectedScenario = document.getElementById("ecommerce").value;
    handlePageScenario();
    updateFunctionBodies("ecommerce", selectedScenario);
});

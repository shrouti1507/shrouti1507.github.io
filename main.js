import {
    updateRudderAnalytics,
    cacheValues,
    populateCachedValues,
    handleTrackScenario,
    handleIdentifyScenario,
    handlePageScenario,
    handleGroupScenario,
    handleAliasScenario,
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
document.getElementById("identify").addEventListener("change", function () {
    handleIdentifyScenario();
});

document.getElementById("track").addEventListener("change", function () {
    handleTrackScenario();
});

document.getElementById("page").addEventListener("change", function () {
    handlePageScenario();
});

document.getElementById("group").addEventListener("change", function () {
    handleGroupScenario();
});

document.getElementById("alias").addEventListener("change", function () {
    handleAliasScenario();
});

document.getElementById("ecommerce").addEventListener("change", function () {
    handleScenarioSelection();
});


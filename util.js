// This file contains the functions to handle the CDN URL selection, update the RudderAnalytics object and cache the entered values

import {
    userId_as_int,
    no_userId_only_traits,
    traits_no_email,
    only_userId_no_traits,
    traits_and_context,
    only_event_name,
    event_name_and_props,
    event_with_empty_props,
    props_and_traits,
    props_and_product,
    page_name,
    page_category,
    page_name_and_category,
    page_name_and_props_and_category,
    string_group_Id,
    int_group_Id,
    group_Id_and_traits,
    group_Id_and_traits_and_context,
    alias
} from './events.js';

export function handleIdentifyScenario() {
    var selectedScenario = document.getElementById("identify").value;
    console.log("Selected Scenario:", selectedScenario);
    switch (selectedScenario) {
        case "userId_as_int":
            console.log("here");
            userId_as_int();
            break;
        case "no_userId_only_traits":
            no_userId_only_traits();
            break;
        case "traits_no_email":
            traits_no_email();
            break;
        case "only_userId_no_traits":
            only_userId_no_traits();
            break;
        case "traits_and_context":
            traits_and_context();
            break;
        // Add more scenarios here as needed
        default:
            break;
    }
}

export function handleTrackScenario() {
    var selectedScenario = document.getElementById("track").value;
    console.log("Selected Scenario:", selectedScenario);
    switch (selectedScenario) {
        case "only_event_name":
            only_event_name();
            break;
        case "event_name_and_props":
            event_name_and_props();
            break;
        case "event_with_empty_props":
            event_with_empty_props();
            break;
        case "props_and_traits":
            props_and_traits();
            break;
        case "props_and_product":
            props_and_product();
            break;
        default:
            break;
    }
}

export function handlePageScenario() {
    var selectedScenario = document.getElementById("page").value;
    console.log("Selected Scenario:", selectedScenario);
    switch (selectedScenario) {
        case "page_name":
            page_name();
            break;
        case "page_category":
            page_category();
            break;
        case "page_name_and_category":
            page_name_and_category();
            break;
        case "page_name_and_props_and_category":
            page_name_and_props_and_category();
            break;
        default:
            break;
    }

}

export function handleGroupScenario() {
    var selectedScenario = document.getElementById("group").value;
    console.log("Selected Scenario:", selectedScenario);
    switch (selectedScenario) {
        case "string_group_Id":
            string_group_Id();
            break;
        case "int_group_Id":
            int_group_Id();
            break;
        case "group_Id_and_traits":
            group_Id_and_traits();
            break;
        case "group_Id_and_traits_and_context":
            group_Id_and_traits_and_context();
            break;
        default:
            break;
    }
}

export function handleAliasScenario() {
    var selectedScenario = document.getElementById("alias").value;
    console.log("Selected Scenario:", selectedScenario);
    switch (selectedScenario) {
        case "alias":
            alias();
            break;
        default:
            break;
    }
}

// Function to update the CDN URL and integrations object
export function updateRudderAnalytics() {
    var workspaceIdInput = document.getElementById("writekey-input");
    var dataPlaneUrlInput = document.getElementById("data-plane-url-input");
    var configUrlInput = document.getElementById("config-url-input");
    var destSdkBaseUrlInput = document.getElementById("dest-sdk-base-url-input");
    var integrationNameInput = document.getElementById("integration-name-input");
    var cdnDropdown = document.getElementById("cdn-dropdown");
    var cdnTextInput = document.getElementById("cdn-text-input");

    // Fetch the values from the input fields
    var workspaceId = workspaceIdInput.value;
    var dataPlaneUrl = dataPlaneUrlInput.value;
    var configUrl = configUrlInput.value;
    var integrationName = integrationNameInput.value;
    var cdnUrl = cdnDropdown.value === "Other" ? cdnTextInput.value : cdnDropdown.value; // Get the CDN URL from the input

    var rudderScriptTag = document.getElementById("rudder-analytics-script");

    // Update the src attribute of the script tag with the CDN URL
    rudderScriptTag.src = cdnUrl;

    var rudderConfig = {
        configUrl: configUrl,
        logLevel: "DEBUG",
        integrations: {
            All: true,
        },
    };

    if (destSdkBaseUrlInput) {
        rudderConfig["destSdkBaseUrl"] = destSdkBaseUrlInput.value;
    }

    if (integrationName) {
        // for now only a single integration can be disabled
        rudderConfig.integrations[integrationName] = false;
    }

    // Load RudderAnalytics with the updated configuration
    rudderanalytics.load(workspaceId, dataPlaneUrl, rudderConfig);
}

// Function to cache the entered values
export function cacheValues() {
    var workspaceIdInput = document.getElementById("writekey-input");
    var dataPlaneUrlInput = document.getElementById("data-plane-url-input");
    var configUrlInput = document.getElementById("config-url-input");
    var integrationNameInput = document.getElementById("integration-name-input");
    var cdnDropdown = document.getElementById("cdn-dropdown");
    var cdnTextInput = document.getElementById("cdn-text-input");

    // Read values from the input fields
    var workspaceId = workspaceIdInput.value;
    var dataPlaneUrl = dataPlaneUrlInput.value;
    var configUrl = configUrlInput.value;
    var integrationName = integrationNameInput.value;
    var cdnUrl = cdnDropdown.value === "Other" ? cdnTextInput.value : cdnDropdown.value; // Get the CDN URL from the input

    // Cache the values in the local storage
    localStorage.setItem("workspaceId", workspaceId);
    localStorage.setItem("dataPlaneUrl", dataPlaneUrl);
    localStorage.setItem("configUrl", configUrl);
    localStorage.setItem("integrationName", integrationName);
    localStorage.setItem("cdnUrl", cdnUrl);
}

// Function to populate the text boxes with cached values (if available)
export function populateCachedValues() {
    var workspaceIdInput = document.getElementById("writekey-input");
    var dataPlaneUrlInput = document.getElementById("data-plane-url-input");
    var configUrlInput = document.getElementById("config-url-input");
    var integrationNameInput = document.getElementById("integration-name-input");
    var cdnDropdown = document.getElementById("cdn-dropdown");
    var cdnTextInput = document.getElementById("cdn-text-input");

    // Read cached values from the local storage
    var workspaceId = localStorage.getItem("workspaceId");
    var dataPlaneUrl = localStorage.getItem("dataPlaneUrl");
    var configUrl = localStorage.getItem("configUrl");
    var integrationName = localStorage.getItem("integrationName");
    var cdnUrl = localStorage.getItem("cdnUrl");

    // Set the values in the input fields (if available)
    workspaceIdInput.value = workspaceId || "";
    dataPlaneUrlInput.value = dataPlaneUrl || "";
    configUrlInput.value = configUrl || "";
    integrationNameInput.value = integrationName || "";
    cdnDropdown.value = cdnUrl || "https://cdn.rudderlabs.com/v1.1/rudder-analytics.min.js";
    if (cdnUrl === "Other") {
        cdnTextInput.style.display = "block";
        cdnTextInput.value = cdnUrl || "";
    }
}

// ... Existing code ...

// Function to handle the selection of scenarios and update the function bodies on the right side
export function updateFunctionBodies(eventType, scenario) {
    const functionBodiesDiv = document.getElementById(`${eventType}-function-bodies`);
    let functionBodyText = "";

    switch (eventType) {
        case "track":
            switch (scenario) {
                case "only_event_name":
                    functionBodyText = only_event_name.toString();
                    break;
                case "event_name_and_props":
                    functionBodyText = event_name_and_props.toString();
                    break;
                case "event_with_empty_props":
                    functionBodyText = event_with_empty_props.toString();
                    break;
                case "props_and_traits":
                    functionBodyText = props_and_traits.toString();
                    break;
                case "props_and_product":
                    functionBodyText = props_and_product.toString();
                    break;
                // Add more scenarios for the "track" event type as needed
                default:
                    break;
            }
            break;

        case "identify":
            switch (scenario) {
                case "userId_as_int":
                    functionBodyText = userId_as_int.toString();
                    break
                case "no_userId_only_traits":
                    functionBodyText = no_userId_only_traits.toString();
                    break;
                case "traits_no_email":
                    functionBodyText = traits_no_email.toString();
                    break;
                case "only_userId_no_traits":
                    functionBodyText = only_userId_no_traits.toString();
                    break;
                case "traits_and_context":
                    functionBodyText = traits_and_context.toString();
                    break;
                default:
                    break;
            }
            break;

        case "page":
            switch (scenario) {
                case "page_name":
                    functionBodyText = page_name.toString();
                    break;
                case "page_category":
                    functionBodyText = page_category.toString();
                    break;
                case "page_name_and_category":
                    functionBodyText = page_name_and_category.toString();
                    break;
                case "page_name_and_props_and_category":
                    functionBodyText = page_name_and_props_and_category.toString();
                    break;
                default:
                    break;
            }
            break;

        case "group":
            switch (scenario) {
                case "string_group_Id":
                    functionBodyText = string_group_Id.toString();
                    break;
                case "int_group_Id":
                    functionBodyText = int_group_Id.toString();
                    break;
                case "group_Id_and_traits":
                    functionBodyText = group_Id_and_traits.toString();
                    break;
                case "group_Id_and_traits_and_context":
                    functionBodyText = group_Id_and_traits_and_context.toString();
                    break;
                default:
                    break;
            }
            break;

        case "alias":
            switch (scenario) {
                case "alias":
                    functionBodyText = alias.toString();
                    break;
                default:
                    break;
            }
            break;

        case "ecommerce":
            // Add switch cases for the "ecommerce" event type scenarios here
            break;

        default:
            break;
    }

    functionBodiesDiv.innerText = functionBodyText;
}

// Add event listeners for all event type dropdowns
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




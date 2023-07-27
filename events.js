export function userId_as_int() {
    rudderanalytics.identify(
        1234,
        () => {
            console.log("identify called with only userId as integer");
        }
    );
}

export function no_userId_only_traits() {
    rudderanalytics.identify(
        {
            email: "alex@example.com",
            firstName: "Alex",
            lastName: "Keener",
            phone: "+1-202-555-0146"
        },
        () => {
            console.log("identify called with traits no userId");
        }
    );
}

export function traits_no_email() {
    rudderanalytics.identify("12345",
        {
            firstName: "Alex",
            lastName: "Keener",
            phone: "+1-202-555-0146",
            address: {
                city: "San Francisco",
                country: "USA",
                postalCode: "94103",
            }
        },
        () => {
            console.log("identify called with traits no email");
        }
    );
}

export function only_userId_no_traits() {
    rudderanalytics.identify(
        "1hKOmRA4el9Zt1WSfVJIVo4GRlm",
        () => {
            console.log("identify called with only userId");
        }
    );
}

export function traits_and_context() {
    rudderanalytics.identify(
        "1hKOmRA4el9Zt1WSfVJIVo4GRlm", {
        firstName: "Alex",
        lastName: "Keener",
        email: "alex@example.com",
        phone: "+1-202-555-0146"
    }, {
        page: {
            path: "/best-seller/1",
            referrer: "https://www.google.com/search?q=estore+bestseller",
            search: "estore bestseller",
            title: "The best sellers offered by EStore",
            url: "https://www.estore.com/best-seller/1"
        },
        traits: {
            address: {
                city: "San Francisco",
                country: "USA",
                postalCode: "94103",
            },
            phone: "1234567890"
        },
    },
        () => {
            console.log("identify called with traits and contextual info");
        }
    );
}

export function only_event_name() {
    rudderanalytics.track(
        "test",
        () => {
            console.log("Track called with only event name");
        }
    );
}

export function event_name_and_props() {
    rudderanalytics.track(
        "test-prop",
        {
            prop1: "prop1",
            prop2: "prop2"
        },
        () => {
            console.log("Track called with event name and props");
        }
    );
}

export function event_with_empty_props() {
    rudderanalytics.track(
        "test-prop-empty",
        {},
        () => {
            console.log("Track called with event name and empty props");
        }
    );
}

export function props_and_traits() {
    rudderanalytics.track(
        "test-prop-trait",
        {
            prop1: "prop1",
            prop2: "prop2"
        },
        {
            traits: {
                firstName: "Alex",
                lastName: "Keener",
                email: "abc@gmail.com",
                address: {
                    city: "San Francisco",
                    country: "USA",
                    postalCode: "94103",
                }
            }
        },
        () => {
            console.log("Track called with event name and props and traits");
        }
    );
}

export function props_and_product() {
    window.rudderanalytics.track(
        'Product List Viewed', {
        email: 'name@domain.com',
        zipCode: '700115',
        category: 'abc',
        keywords: 'sony',
        page_number: 1,
        filters: [{
            name: 'processor',
            operator: 'eq',
            value: 'snapdragon',
        }],
        products: [
            {
                product_id: '223344ffdds3ff3',
                sku: '223344ffdds3ff3',
                category: 'Mobile',
                name: 'OnePlus 7T',
            },
            {
                product_id: '343344ff5567ff3',
                sku: '343344ff5567ff3',
                category: 'Mobile',
                name: 'OnePlus 7T Pro',
            }
        ]
    }
    );
}

export function page_name() {
    rudderanalytics.page(
        "home",
        () => {
            console.log("Page called with page name");
        }
    );
}

export function page_category() {
    rudderanalytics.page(
        "main page", "",
        () => {
            console.log("Page called with page category");
        }
    );
}

export function page_name_and_category() {
    rudderanalytics.page(
        "page-category", "page-name",
        () => {
            console.log("Page called with page name and category");
        }
    );
}

export function page_name_and_props_and_category() {
    rudderanalytics.page(
        "page-category", "page-name", {
        path: "test-path",
        url: "https://test-your-url.com",
        title: "title",
        search: "search",
        referrer: "https://test-referrer.com",
    },
        () => {
            console.log("Page called with page name and props and category");
        }
    );
}

export function string_group_Id() {
    rudderanalytics.group(
        "groupId",
        () => {
            console.log("Group called with group Id as string");
        }
    );
}

export function int_group_Id() {
    rudderanalytics.group(
        1234,
        () => {
            console.log("Group called with group Id as integer");
        }
    );
}

export function group_Id_and_traits() {
    console.log("group_Id_and_traits called");
    rudderanalytics.group(
        "groupId",
        {
            email: "groupemail@gmail.com",
            name: "groupname",
        },
        () => {
            console.log("Group called with group Id and traits");
        }
    );
}

export function group_Id_and_traits_and_context() {
    rudderanalytics.group(
        "groupId",
        {
            email: "groupemail@gmail.com",
            name: "groupname",
        },
        {
            traits: {
                address: {
                    city: "San Francisco",
                    country: "USA",
                    postalCode: "94103",
                },
                phone: "1234567890"
            },
        },
        () => {
            console.log("Group called with group Id and traits and context");
        }
    );
}

export function alias() {
    rudderanalytics.alias("new_id", "old_id", () => {
        console.log("Alias called");
    });
}


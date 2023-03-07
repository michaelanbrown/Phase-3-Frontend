# Michaela's Property Management System

## Welcome Page

Welcome to Michaela's Property Management system! Here you will see all of the prperties that my partner and I currently own, as well as what we are interested in.

## Owned

Come here to see every place that my partner and I own!

## Pending

Come here to see every place that my partner and I are interested in!

## Add a Property

Here you are able to add a property and based on if there is a purchase price, it will either be added to the owned or pending page!


## Description
The Navigation Bar at the top will allow you to pick between what page you would like to view! It will automatically direct you to the Welcome Page, but from there it is up to you what to see next!
In the Owned Page, you will be able to see all properties that my partner and I own. There is also an ability to delete each proeprty, and an ability to click into each property to view more details. Within the specific property's view there are a couple of forms as well!
1. You can add a finance record to monitor finances on each property.
2. You can update any certain information regarding the propreties, just not the address or the property type as those should not generally change!
In the Penging Page, you will be able to see all properties that my partner and I are interested in owning. The same abilities present for the Owned Page as also present for the Pending Page!
Lastly, there is the Add a Property Page. This page allows you to add a property! Note that if the purchase price is left blank then that will direct the property to be added to the Pending Page!

Button to delete a property:
```bash
<button onClick={handlePropertyDelete} className="delete"><span role="img" aria-label="delete">Delete this property</span></button>
```

Form to submit a new property:
```bash
<form onSubmit={handleNewProperty}>
```

Form to submit a new record:
```bash
<form onSubmit={handleNewRecord}>
```

Form to update property information:
```bash
<form onSubmit={handleUpdatingProperty}>
```


## Fetch Examples

```python
# POST Fetch

    function handleNewRecord(e) {
        e.preventDefault();
        fetch("http://localhost:9292/records", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(recordFormData)
        })
        .then(r => r.json())
        .then(r => addRecord(r))
        .then(setRecordFormData({
            mortgage_payment: "",
            hoa_payment: "",
            property_management_payment: "",
            gross_income: "",
            property: recordFormData.property
        }))
    }
```

```python
# PATCH Fetch

    function handleUpdatingProperty(e) {
        e.preventDefault();
        fetch(`http://localhost:9292/properties/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json",
                "Accept" : "application/json"
            },
        body: JSON.stringify(updateProperty)
        })
        .then(r => r.json())
        .then(r => updatePropertiesArray(r))
    }
```

## Fork and Clone
If you would like to clone this into your environment and make it your own, feel free to do so. This is connected to the backend data here: https://github.com/michaelanbrown/phase-3-backend.

## Contributing

Suggestions are welcome.

## Acknowledgment
I do not own the photos presented.
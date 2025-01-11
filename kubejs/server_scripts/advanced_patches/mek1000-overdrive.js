onEvent("recipes", event => {
    event.custom({"type":"mekanism:reaction",
        "itemInput":{"item":'mekanism:substrate'},
        "fluidInput":{"amount":1,"tag":"minecraft:water"},
        "gasInput":{"amount":10,"gas":"mekanism:antimatter"},
        "energyRequired":2149483647,"duration":100,
        "itemOutput":{"item":"mek1000overdrive:energy_bloom","amount":1}
    })
    event.custom({"type":"mekanism:reaction",
        "itemInput":{"item":'mekanism:substrate'},
        "fluidInput":{"amount":10,"tag":"forge:ethene"},
        "gasInput":{"amount":10,"gas":"mekanism:antimatter"},
        "energyRequired":2149483647,"duration":72000,
        "itemOutput":{"item":"mek1000overdrive:energy_singularity","amount":1}
    })
    

    let processing_overdrive = (oretype, multiplifer, baseitem, output_type) => {

    }
})
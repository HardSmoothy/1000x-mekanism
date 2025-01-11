onEvent("recipes", event => {
    // ばりにうむを しえしえ
    event.custom({
        type:"mekanism:chemical_infusing","chemicalType":"gas",leftInput:{"gas":"mekanism:hydrogen","amount":1000},rightInput:{"gas":"mekanism:antimatter","amount":1000},output:{"gas":"mek1000valinium:anti_hydrogen","amount":1}
    })
    event.custom({
        type:"mekanism:chemical_infusing","chemicalType":"gas",leftInput:{"gas":"mek1000valinium:anti_hydrogen","amount":1},rightInput:{"gas":"mek1000:valine3g","amount":1},output:{"gas":"mek1000valinium:anti_hydride_valine","amount":1}
    })
    event.custom({
        type:"mekanism:chemical_infusing","chemicalType":"gas",leftInput:{"gas":"mek1000valinium:anti_hydride_valine","amount":1},rightInput:{"gas":"mek1000:activated_redstone","amount":1},output:{"gas":"mek1000valinium:valinium","amount":1}
    })
    // ばりにうむを いんごっと
    event.custom({
        "type": "mekanism:crystallizing",
        "chemicalType": "gas",
        "input": {
            "amount": 1,
            "gas": "mek1000valinium:valinium"
        },
        "output": {
            "item": 'mek1000valinium:valine_ingot'
        }
    })
    event.shapeless("mek1000valinium:valine_block", ['mek1000valinium:valine_ingot','mek1000valinium:valine_ingot','mek1000valinium:valine_ingot','mek1000valinium:valine_ingot','mek1000valinium:valine_ingot','mek1000valinium:valine_ingot','mek1000valinium:valine_ingot','mek1000valinium:valine_ingot','mek1000valinium:valine_ingot'])
    // バリニウム製品
    event.shaped('mek1000valinium:valine_helmet',[
        'AAA',
        'A A'
    ],{
        A: 'mek1000valinium:valine_block'
    })
    event.shaped('mek1000valinium:valine_leggings',[
        'AAA',
        'A A',
        'A A'
    ],{
        A: 'mek1000valinium:valine_block'
    })
    event.shaped('mek1000valinium:valine_chestplate',[
        'A A',
        'AAA',
        'AAA'
    ],{
        A: 'mek1000valinium:valine_block'
    })
    event.shaped('mek1000valinium:valine_boots',[
        'A A',
        'A A'
    ],{
        A: 'mek1000valinium:valine_block'
    })
    event.shaped('mek1000valinium:valine_axe',[
        'AA',
        'IA',
        'I '
    ],{
        A: 'mek1000valinium:valine_block',
        I: 'minecraft:stick'
    })
    event.shaped('mek1000valinium:valine_pickaxe',[
        'AAA',
        ' I ',
        ' I '
    ],{
        A: 'mek1000valinium:valine_block',
        I: 'minecraft:stick'
    })
    event.shaped('mek1000valinium:valine_paxel',[
        'AAA',
        'DID',
        ' I '
    ],{
        A: 'mek1000valinium:valine_block',
        I: 'minecraft:stick',
        D: "minecraft:diamond"
    })
    event.shaped('mek1000valinium:valine_hoe',[
        'AA',
        'I ',
        'I '
    ],{
        A: 'mek1000valinium:valine_block',
        I: 'minecraft:stick'
    })
    event.shaped('mek1000valinium:valine_sword',[
        'A',
        'A',
        'I'
    ],{
        A: 'mek1000valinium:valine_block',
        I: 'minecraft:stick'
    })
    event.shaped('mek1000valinium:valine_shovel',[
        'A',
        'I',
        'I'
    ],{
        A: 'mek1000valinium:valine_block',
        I: 'minecraft:stick'
    })
})
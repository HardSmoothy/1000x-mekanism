onEvent('item.registry.tool_tiers', event => {
    event.add('valinium', tier => {
        tier.uses = 2048
        tier.speed = 13
        tier.attackDamageBonus = 15
        tier.level = 4
        tier.enchantmentValue = 25
        tier.repairIngredient = '#forge:ingots/valinium'
    })
})

onEvent('item.registry.armor_tiers', event => {
    // Slot indicies are [FEET, LEGS, BODY, HEAD]
    event.add('valinium', tier => {
        tier.durabilityMultiplier = 256 // Each slot will be multiplied with [13, 15, 16, 11]
        tier.slotProtections = [6, 15, 18, 6]
        tier.enchantmentValue = 25
        tier.equipSound = 'minecraft:item.armor.equip_iron'
        tier.repairIngredient = '#forge:ingots/valinium'
        tier.toughness = 4.0 // diamond has 2.0, netherite 3.0
        tier.knockbackResistance = 0.5
    })
})


onEvent('item.registry', event => {
    event.create('mek1000valinium:valine_ingot').displayName('Valinium Ingot').tag("forge:ingots/valinium")
    event.create('mek1000valinium:valine_sword',"sword").displayName('Valinium Sword').tier("valinium")

    event.create('mek1000valinium:valine_shovel',"shovel").displayName('Valinium Shovel').tier("valinium")
    event.create('mek1000valinium:valine_pickaxe',"pickaxe").displayName('Valinium Pickaxe').tier("valinium")
    event.create('mek1000valinium:valine_axe',"axe").displayName('Valinium Axe').tier("valinium")
    event.create('mek1000valinium:valine_hoe',"hoe").displayName('Valinium Hoe').tier("valinium")
    event.create('mek1000valinium:valine_paxel').displayName('Valinium Paxel')
    event.create('mek1000valinium:valine_helmet',"helmet").displayName('Valinium Helmet').tier("valinium")
    event.create('mek1000valinium:valine_chestplate',"chestplate").displayName('Valinium Chestplate').tier("valinium")
    event.create('mek1000valinium:valine_leggings',"leggings").displayName('Valinium Leggings').tier("valinium")
    event.create('mek1000valinium:valine_boots',"boots").displayName('Valinium Boots').tier("valinium")
})

onEvent('block.registry', event => {
    event.create('mek1000valinium:valine_block')
        .displayName('Valinium Block')
        .material('stone')
        .hardness(12)
        .tagBlock('minecraft:mineable/pickaxe') // Make it mine faster using a shovel in 1.18.2+
        .tagBlock('minecraft:needs_iron_tool') // Make it require an iron or higher level tool on 1.18.2+
        .requiresTool(true) // Make it require a tool to drop ay loot
})

onEvent('mekanism.gas.registry', event => {
    //反水素、反水素化バリンガス、バリニウムガス
    event.create('mek1000valinium:anti_hydrogen').color(0x9373ff).fuel(20,5)
    event.create('mek1000valinium:anti_hydride_valine').color(0xdcc2fc).fuel(20,57734)
    event.create('mek1000valinium:valinium').color(0xe0d5ed).fuel(1,57734*2)
})
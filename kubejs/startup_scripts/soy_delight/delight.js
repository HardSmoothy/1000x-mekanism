// Platform.mods.mek1000_sdl.name = 'Mek1000: The Soy Delight'
onEvent('item.registry', event => {
    //d-t drink
    event.create('mek1000delight:dtdrink')
        .useAnimation("drink")

    //tofu
    event.create('mek1000delight:tofu', "sword")
        .useAnimation("eat")
        .tier("diamond")
        .speed(0.3)
        
})
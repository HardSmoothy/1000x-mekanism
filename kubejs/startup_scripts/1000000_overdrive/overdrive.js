// Platform.mods.mek1000overdrive.name = 'Mek1000overdrive'
/*
    5倍化からは1000倍
    5倍化設備 浄化結晶II  からは 10000mB (非圧縮)
    6倍化設備 浄化結晶I   からは 10個生成 (副材料：水1B、王水1B)
    7倍化設備 発展浄化蒸気　 100mB から 浄化結晶I 1個を生成
    7倍化設備 反応性発展蒸気 100mB から 発展浄化蒸気 100mB を生成 (副材料：非活性化王水1B)
    7倍化設備 増幅集合物質I  1個から 反応性発展蒸気 500mB を生成 (副材料：水2L、反物質20mB)

    8倍化設備 不安定な増幅集合物質I 1個から 増幅集合物質I 1個を生成 (副材料：バリニウムガス10mB、液体フッ化水素酸|副生成物：反物質50mB) [加圧反応室]
    8倍化設備 かなり不安定な増幅集合物質I 1個から 不安定な増幅集合物質I 1個を生成 (副材料：反物質10mB) [反陽子核合成機]
    8倍化設備 各種鉱石 1個から かなり不安定な増幅集合物質I 20個を生成 (副材料：濃縮ポロニウム4mB) [吹き込み]
    8倍化設備 各種原石 1個から かなり不安定な増幅集合物質I 15個を生成 (副材料：濃縮ポロニウム3mB) [吹き込み]
    8倍化設備 増幅集合物質II 1個から かなり不安定な増幅集合物質I 10個を生成 (副材料：濃縮ポロニウム2mB) [吹き込み]

    9倍化設備 増幅集合物質IIガス 1mB から 増幅集合物質II 1個を生成 [結晶化]
    9倍化設備 反応性増幅集合物質ガス 1mB から 増幅集合物質IIガス 1mB を生成　[同位体遠心分離]
    9倍化設備 不安定な増幅集合物質ガス 1mB から 反応性増幅集合物質ガス 1mB を生成 [同位体遠心分離]
    9倍化設備 転移処理済み増幅集合液 1mB から 不安定な増幅集合物質ガス 1mB を生成 (副生成物：反物質1000mB) [電気分解機]
    9倍化設備 転移処理済み増幅集合ガス 1mB を液化 [回転式気体凝縮]
    9倍化設備 増幅集合ガス 10mB から 転移処理済み増幅集合ガス 1mB を生成 (副材料：高反応性反物質10mB）[化学混成機]
    9倍化設備 増幅集合部品 1個 から 増幅集合ガス 100mB [溶解室]

    [選択] 1/2
    9倍化設備 各種鉱石 1個 から 増幅集合部品 4個 を生成 (副材料:金100mB) [吹き込み]
    9倍化設備 各種原石 1個 から 増幅集合部品 3個 を生成 (副材料:金75mB) [吹き込み]

    [選択] 2/2
    9倍化設備 反応性増幅部品 1個 から 増幅集合部品 10個 を生成 (副材料:基質 1個) [結合]
    9倍化設備 各種鉱石 1個 から 反応性増幅部品 4個 を生成 (副材料:Os 1) [圧縮]
    9倍化設備 各種原石 1個 から 反応性増幅部品 3個 を生成 (副材料:Os 1) [圧縮]

*/

let orelist = [
    {type:`iron`         ,name:`Iron`         ,color:0xf2f2f2},
    {type:`gold`         ,name:`Gold`         ,color:0xF2CD67},
    {type:`copper`       ,name:`Copper`       ,color:0xd8a31e},
    {type:`uranium`      ,name:`Uranium`      ,color:0x96f996},
    {type:`iridium`      ,name:`Iridium`      ,color:0xf0f8ff},
    {type:`lead`         ,name:`Lead`         ,color:0x5d9c9e},
    {type:`tin`          ,name:`Tin`          ,color:0xCCCCD9},
    {type:`osmium`       ,name:`Osmium`       ,color:0x52BDCA},
    {type:`redstone`     ,name:`Redstone`     ,color:0xff0f0f},
    {type:`certus_quartz`,name:`Certus Quartz`,color:0xa0afff},
    {type:`quartz`       ,name:`Quartz`       ,color:0xffafa0},
    {type:`fluorite`     ,name:`Fluorite`     ,color:0xff9ff0},
    {type:`coal`         ,name:`Coal`         ,color:0x333333},
    {type:`diamond`      ,name:`Diamond`      ,color:0x22a0f0},
    {type:`emerald`      ,name:`Emerald`      ,color:0x22f050},
    {type:`lapis`        ,name:`Lapis`        ,color:0x3333f0},
    {type:`fate`         ,name:`Fate of Infinity` ,color:0xff7f3f},
]
onEvent('item.registry', event => {
    let regist_overdrive_items= (ore_component,ore_name) => {
        event // 発展浄化結晶II (5と6のつなぎ2)
            .create(`mek1000overdrive:advanced_purified_${ore_component}`)
            .displayName(`Advanced Purified ${ore_name} Crystal`)
            .tooltip('限界を超えて')
            .texture(`kubejs:item/goodore`)
            .rarity(`rare`)
            .glow(true)
            .barWidth(itemstack => 13)
            .barColor(itemstack => Color.YELLOW)
        event // 発展浄化結晶I  (6と7のつなぎ2)
            .create(`mek1000overdrive:imcomplete_advanced_purified_${ore_component}`)
            .displayName(`Imcomplete Advanced Purified ${ore_name} Ore-Crystal`)
            .tooltip('チャージ中...')
            .texture(`kubejs:item/goodore`)
            .rarity(`rare`)
            .glow(true)
            .barWidth(itemstack => 8)
            .barColor(itemstack => Color.YELLOW)

        event // 増幅集合物質I
            .create(`mek1000overdrive:cluster_${ore_component}`)
            .displayName(`${ore_name} Cluster`)
            .tooltip('不安定だからって爆発したりはしません')
            .texture(`kubejs:item/goodore`)
            .rarity(`rare`)
            .glow(true)
            .barWidth(itemstack => 13)
            .barColor(itemstack => Color.RED)
        event // 不安定な増幅集合物質I
            .create(`mek1000overdrive:unstable_cluster_${ore_component}`)
            .displayName(`Unstable ${ore_name} Cluster`)
            .tooltip('とても不安定よりかは扱いやすい')
            .texture(`kubejs:item/goodore`)
            .rarity(`rare`)
            .glow(true)
            .barWidth(itemstack => 10)
            .barColor(itemstack => Color.RED)
        event // かなり不安定な増幅集合物質I
            .create(`mek1000overdrive:high_unstable_cluster_${ore_component}`)
            .displayName(`Highly Unstable ${ore_name} Cluster`)
            .tooltip('今にも爆発しそう')
            .texture(`kubejs:item/goodore`)
            .rarity(`rare`)
            .glow(true)
            .barWidth(itemstack => 8)
            .barColor(itemstack => Color.RED)

        event // 増幅集合物質II
            .create(`mek1000overdrive:cluster2_${ore_component}`)
            .displayName(`${ore_name} Hyper-Cluster`)
            .tooltip('蘇りし力 ...どこから？')
            .texture(`kubejs:item/goodore`)
            .rarity(`rare`)
            .glow(true)
            .barWidth(itemstack => 6)
            .barColor(itemstack => Color.RED)
        
        event // 増幅集合部品
            .create(`mek1000overdrive:cluster2_shard_${ore_component}`)
            .displayName(`${ore_name} Hyper-Cluster Shard`)
            .tooltip('はじまり。 おわり。')
            .texture(`kubejs:item/goodore`)
            .rarity(`rare`)
            .glow(true)
            .barWidth(itemstack => 3)
            .barColor(itemstack => Color.RED)
        event // 反応性増幅部品
            .create(`mek1000overdrive:cluster2_reactive_${ore_component}`)
            .displayName(`${ore_name} Hyper-Cluster Reactive Shard`)
            .tooltip('9桁倍の世界へようこそ')
            .texture(`kubejs:item/goodore`)
            .rarity(`rare`)
            .glow(true)
            .barWidth(itemstack => 13)
            .barColor(itemstack => Color.GRAY)
    };

    regist_overdrive_items("iron","Iron")
    regist_overdrive_items("copper","Copper")
    regist_overdrive_items("gold","Gold")
    regist_overdrive_items("uranium","Uranium")
    regist_overdrive_items("iridium","Iridium")
    regist_overdrive_items("lead","Lead")
    regist_overdrive_items("tin","Tin")
    regist_overdrive_items("osmium","Osmium")
    regist_overdrive_items("redstone","Redstone")
    regist_overdrive_items("certus_quartz","Certus-Quartz")
    regist_overdrive_items("quartz","Quartz")
    regist_overdrive_items("fluorite","Fluorite")
    regist_overdrive_items("coal","Coal")
    regist_overdrive_items("lapis","Lapis lazuri")
    regist_overdrive_items("emerald","Emerald")
    regist_overdrive_items("diamond","Diamond")

    event // 特殊アイテム
        .create(`mek1000overdrive:energy_bloom`)
        .displayName(`Energy Bloom`)
        .tooltip('瞬発的なエネルギーと絶望をあなたに。')
        .texture(`kubejs:item/energy_crystal`)
        .rarity(`rare`)
        .glow(true)
        .barWidth(itemstack => 13)
        .barColor(itemstack => Color.WHITE)
    event // 特殊アイテム
        .create(`mek1000overdrive:energy_singularity`)
        .displayName(`Energy Singularity`)
        .tooltip('瞬発的なエネルギーと絶望をあなたに。')
        .texture(`kubejs:item/energy_crystal`)
        .rarity(`epic`)
        .glow(true)
        .barWidth(itemstack => 13)
        .barColor(itemstack => Color.YELLOW)
})

onEvent('fluid.registry', event => {
    orelist.forEach(ore_component=>{
        event.create(`mek1000overdrive:attenuated_${ore_component.type}`).displayName(`Attenuated ${ore_component.name} Hyper-Cluster Drops`).thickTexture(ore_component.color).bucketColor(ore_component.color)
    })
})


onEvent('mekanism.gas.registry', event => {
    orelist.forEach(ore_component=>{
        event.create(`mek1000overdrive:purified2_${ore_component.type}`).displayName(`Purified Compressed ${ore_component.name} Mk2 Gas`).color(ore_component.color-0x090909)
        event.create(`mek1000overdrive:active2_${ore_component.type}`).displayName(`Active Compressed ${ore_component.name} Mk2 Gas`).color(ore_component.color-0x050505)
        event.create(`mek1000overdrive:cluster2_${ore_component.type}`).displayName(`${ore_component.name} Hyper-Cluster Gas`).color(ore_component.color-0x020202)
        event.create(`mek1000overdrive:reactive_cluster2_${ore_component.type}`).displayName(`Reactive ${ore_component.name} Hyper-Cluster Gas`).color(ore_component.color-0x101010)
        event.create(`mek1000overdrive:unstable_active2_${ore_component.type}`).displayName(`Unstable ${ore_component.name} Hyper-Cluster Gas`).color(ore_component.color-0x121212)
        event.create(`mek1000overdrive:warped_active2_${ore_component.type}`).displayName(`Warped ${ore_component.name} Hyper-Cluster Gas`).color(ore_component.color-0x090900)
        event.create(`mek1000overdrive:influenced_${ore_component.type}`).displayName(`Influenced ${ore_component.name} Gas`).color(ore_component.color)
    })
})
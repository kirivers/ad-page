//  morph  tagteam  spellsteal  dividedwestand injoker  missinghero!!  GRIMSTROKE  multicast 

export const heroAbilityMap = {
    1: ["antimage_mana_break", "antimage_blink", "antimage_counterspell", "antimage_mana_void"], // Anti-Mage
    2: ["axe_berserkers_call", "axe_battle_hunger", "axe_counter_helix", "axe_culling_blade"], // Axe
    3: ["bane_enfeeble", "bane_brain_sap", "bane_nightmare", "bane_fiends_grip"], // Bane
    4: ["bloodseeker_bloodrage", "bloodseeker_blood_bath", "bloodseeker_thirst", "bloodseeker_rupture"], // Bloodseeker
    5: ["crystal_maiden_crystal_nova", "crystal_maiden_frostbite", "crystal_maiden_brilliance_aura", "crystal_maiden_freezing_field"], // Crystal Maiden
    6: ["drow_ranger_frost_arrows", "drow_ranger_wave_of_silence", "drow_ranger_multishot", "drow_ranger_marksmanship"], // Drow Ranger
    7: ["earthshaker_fissure", "earthshaker_enchant_totem", "earthshaker_aftershock", "earthshaker_echo_slam"], // Earthshaker
    8: ["juggernaut_blade_fury", "juggernaut_healing_ward", "juggernaut_blade_dance", "juggernaut_omni_slash"], // Juggernaut
    9: ["mirana_starfall", "mirana_arrow", "mirana_leap", "mirana_invis"], // Mirana
    10: ["morphling_waveform", "morphling_morph_agi", "morphling_morph_str", "morphling_morph_replicate"], // Morphling
    11: ["nevermore_shadowraze1", "nevermore_dark_lord", "nevermore_frenzy", "nevermore_requiem"], // Shadow Fiend
    12: ["phantom_lancer_spirit_lance", "phantom_lancer_doppelwalk", "phantom_lancer_phantom_edge", "phantom_lancer_juxtapose"], // Phantom Lancer
    13: ["puck_illusory_orb", "puck_waning_rift", "puck_phase_shift", "puck_dream_coil"], // Puck
    14: ["pudge_meat_hook", "pudge_rot", "pudge_flesh_heap", "pudge_dismember"], // Pudge
    15: ["razor_plasma_field", "razor_static_link", "razor_storm_surge", "razor_eye_of_the_storm"], // Razor
    16: ["sandking_burrowstrike", "sandking_sand_storm", "sandking_scorpion_strike", "sandking_epicenter"], // Sand King
    17: ["storm_spirit_static_remnant", "storm_spirit_electric_vortex", "storm_spirit_overload", "storm_spirit_ball_lightning"], // Storm Spirit
    18: ["sven_storm_bolt", "sven_great_cleave", "sven_warcry", "sven_gods_strength"], // Sven
    19: ["tiny_avalanche", "tiny_toss", "tiny_tree_grab", "tiny_grow"], // Tiny
    20: ["vengefulspirit_magic_missile", "vengefulspirit_wave_of_terror", "vengefulspirit_command_aura", "vengefulspirit_nether_swap"], // Vengeful Spirit
    21: ["windrunner_shackleshot", "windrunner_powershot", "windrunner_windrun", "windrunner_focusfire"], // Windranger
    22: ["zuus_arc_lightning", "zuus_lightning_bolt", "zuus_heavenly_jump", "zuus_thundergods_wrath"], // Zeus
    23: ["kunkka_torrent", "kunkka_tidebringer", "kunkka_x_marks_the_spot", "kunkka_ghostship"], // Kunkka
    25: ["lina_dragon_slave", "lina_light_strike_array", "lina_fiery_soul", "lina_laguna_blade"], // Lina
    26: ["lion_impale", "lion_voodoo", "lion_mana_drain", "lion_finger_of_death"], // Lion
    27: ["shadow_shaman_ether_shock", "shadow_shaman_voodoo", "shadow_shaman_shackles", "shadow_shaman_mass_serpent_ward"], // Shadow Shaman
    28: ["slardar_sprint", "slardar_slithereen_crush", "slardar_bash", "slardar_amplify_damage"], // Slardar
    29: ["tidehunter_gush", "tidehunter_kraken_shell", "tidehunter_anchor_smash", "tidehunter_ravage"], // Tidehunter
    30: ["witch_doctor_paralyzing_cask", "witch_doctor_voodoo_restoration", "witch_doctor_maledict", "witch_doctor_death_ward"], // Witch Doctor
    31: ["lich_frost_nova", "lich_frost_shield", "lich_sinister_gaze", "lich_chain_frost"], // Lich
    32: ["riki_smoke_screen", "riki_blink_strike", "riki_tricks_of_the_trade", "riki_permanent_invisibility"], // Riki
    33: ["enigma_malefice", "enigma_demonic_conversion", "enigma_midnight_pulse", "enigma_black_hole"], // Enigma
    34: ["tinker_laser", "tinker_defense_matrix", "tinker_march_of_the_machines", "tinker_rearm"], // Tinker
    35: ["sniper_shrapnel", "sniper_headshot", "sniper_take_aim", "sniper_assassinate"], // Sniper
    36: ["necrolyte_death_pulse", "necrolyte_ghost_shroud", "necrolyte_heartstopper_aura", "necrolyte_reapers_scythe"], // Necrophos
    37: ["warlock_fatal_bonds", "warlock_shadow_word", "warlock_upheaval", "warlock_rain_of_chaos"], // Warlock
    38: ["beastmaster_wild_axes", "beastmaster_call_of_the_wild", "beastmaster_inner_beast", "beastmaster_primal_roar"], // Beastmaster
    // Queen of Pain
    39: ["queenofpain_shadow_strike", "queenofpain_blink", "queenofpain_scream_of_pain", "queenofpain_sonic_wave"],
    
    // Venomancer
    40: ["venomancer_venomous_gale", "venomancer_poison_sting", "venomancer_plague_ward", "venomancer_noxious_plague"],
    
    // Faceless Void
    41: ["faceless_void_time_walk", "faceless_void_time_dilation", "faceless_void_time_lock", "faceless_void_chronosphere"],
    
    // Wraith King
    42: ["skeleton_king_hellfire_blast", "skeleton_king_vampiric_aura", "skeleton_king_mortal_strike", "skeleton_king_reincarnation"],
    
    // Death Prophet
    43: ["death_prophet_carrion_swarm", "death_prophet_silence", "death_prophet_spirit_siphon", "death_prophet_exorcism"],
    
    // Phantom Assassin
    44: ["phantom_assassin_stifling_dagger", "phantom_assassin_phantom_strike", "phantom_assassin_blur", "phantom_assassin_coup_de_grace"],
    
    // Pugna
    45: ["pugna_nether_blast", "pugna_decrepify", "pugna_nether_ward", "pugna_life_drain"],
    
    // Templar Assassin
    46: ["templar_assassin_refraction", "templar_assassin_meld", "templar_assassin_psi_blades", "templar_assassin_psionic_trap"],
    
    // Viper
    47: ["viper_poison_attack", "viper_nethertoxin", "viper_corrosive_skin", "viper_viper_strike"],
    
    // Luna
    48: ["luna_lucent_beam", "luna_moon_glaive", "luna_lunar_orbit", "luna_eclipse"],
    
    // Dragon Knight
    49: ["dragon_knight_breathe_fire", "dragon_knight_dragon_tail", "dragon_knight_dragon_blood", "dragon_knight_elder_dragon_form"],
    
    // Dazzle
    50: ["dazzle_poison_touch", "dazzle_shallow_grave", "dazzle_shadow_wave", "dazzle_nothl_projection"],
    
    // Clockwerk
    51: ["rattletrap_battery_assault", "rattletrap_power_cogs", "rattletrap_rocket_flare", "rattletrap_hookshot"],
    
    // Leshrac
    52: ["leshrac_split_earth", "leshrac_diabolic_edict", "leshrac_lightning_storm", "leshrac_pulse_nova"],
    
    // Nature's Prophet
    53: ["furion_sprout", "furion_teleportation", "furion_force_of_nature", "furion_wrath_of_nature"],
    
    // Lifestealer
    54: ["life_stealer_rage", "life_stealer_feast", "life_stealer_open_wounds", "life_stealer_infest"],
    
    // Dark Seer
    55: ["dark_seer_vacuum", "dark_seer_ion_shell", "dark_seer_surge", "dark_seer_wall_of_replica"],
    
    // Clinkz
    56: ["clinkz_strafe", "clinkz_tar_bomb", "clinkz_death_pact", "clinkz_wind_walk"],
    
    // Omniknight
    57: ["omniknight_purification", "omniknight_martyr", "omniknight_hammer_of_purity", "omniknight_guardian_angel"],
    
    // Enchantress
    58: ["enchantress_impetus", "enchantress_enchant", "enchantress_natures_attendants", "enchantress_untouchable"],
    
    // Huskar
    59: ["huskar_inner_fire", "huskar_burning_spear", "huskar_berserkers_blood", "huskar_life_break"],
    
    // Night Stalker
    60: ["night_stalker_void", "night_stalker_crippling_fear", "night_stalker_hunter_in_the_night", "night_stalker_darkness"],
    
    // Broodmother
    61: ["broodmother_spawn_spiderlings", "broodmother_spin_web", "broodmother_incapacitating_bite", "broodmother_insatiable_hunger"],
    
    // Bounty Hunter
    62: ["bounty_hunter_shuriken_toss", "bounty_hunter_jinada", "bounty_hunter_wind_walk", "bounty_hunter_track"],
    
    // Weaver
    63: ["weaver_the_swarm", "weaver_shukuchi", "weaver_geminate_attack", "weaver_time_lapse"],
    
    // Jakiro
    64: ["jakiro_dual_breath", "jakiro_ice_path", "jakiro_liquid_fire", "jakiro_macropyre"],
    
    // Batrider
    65: ["batrider_sticky_napalm", "batrider_flamebreak", "batrider_firefly", "batrider_flaming_lasso"],
    
    // Chen
    66: ["chen_penitence", "chen_holy_persuasion", "chen_divine_favor", "chen_hand_of_god"],
    
    // Spectre
    67: ["spectre_spectral_dagger", "spectre_desolate", "spectre_dispersion", "spectre_haunt_single"],
    
    // Ancient Apparition
    68: ["ancient_apparition_cold_feet", "ancient_apparition_ice_vortex", "ancient_apparition_chilling_touch", "ancient_apparition_ice_blast"],
    
    // Doom
    69: ["doom_bringer_devour", "doom_bringer_scorched_earth", "doom_bringer_infernal_blade", "doom_bringer_doom"],
    
    // Ursa
    70: ["ursa_earthshock", "ursa_overpower", "ursa_fury_swipes", "ursa_enrage"],
    
    // Spirit Breaker
    71: ["spirit_breaker_charge_of_darkness", "spirit_breaker_bulldoze", "spirit_breaker_greater_bash", "spirit_breaker_nether_strike"],

    // Previous entries...
    
    // Gyrocopter
    72: ["gyrocopter_rocket_barrage", "gyrocopter_homing_missile", "gyrocopter_flak_cannon", "gyrocopter_call_down"],
    
    // Alchemist
    73: ["alchemist_acid_spray", "alchemist_unstable_concoction", "alchemist_corrosive_weaponry", "alchemist_chemical_rage"],
    
    // Invoker
    74: ["invoker_quas", "invoker_wex", "invoker_exort", "invoker_invoke"],
    
    // Silencer
    75: ["silencer_curse_of_the_silent", "silencer_glaives_of_wisdom", "silencer_last_word", "silencer_global_silence"],
    
    // Outworld Destroyer
    76: ["obsidian_destroyer_arcane_orb", "obsidian_destroyer_astral_imprisonment", "obsidian_destroyer_essence_aura", "obsidian_destroyer_sanity_eclipse"],
    
    // Lycan
    77: ["lycan_summon_wolves", "lycan_howl", "lycan_feral_impulse", "lycan_shapeshift"],
    
    // Brewmaster
    78: ["brewmaster_thunder_clap", "brewmaster_drunken_haze", "brewmaster_drunken_brawler", "brewmaster_primal_split"],
    
    // Shadow Demon
    79: ["shadow_demon_disruption", "shadow_demon_disseminate", "shadow_demon_shadow_poison", "shadow_demon_demonic_purge"],
    
    // Lone Druid
    80: ["lone_druid_spirit_bear", "lone_druid_spirit_link", "lone_druid_savage_roar", "lone_druid_true_form"],
    
    // Chaos Knight
    81: ["chaos_knight_chaos_bolt", "chaos_knight_reality_rift", "chaos_knight_chaos_strike", "chaos_knight_phantasm"],
    
    // Meepo
    82: ["meepo_earthbind", "meepo_poof", "meepo_ransack", "meepo_divided_we_stand"],
    
    // Treant Protector
    83: ["treant_natures_grasp", "treant_leech_seed", "treant_living_armor", "treant_overgrowth"],
    
    // Ogre Magi
    84: ["ogre_magi_fireblast", "ogre_magi_ignite", "ogre_magi_bloodlust", "ogre_magi_multicast"],
    
    // Undying
    85: ["undying_decay", "undying_soul_rip", "undying_tombstone", "undying_flesh_golem"],
    
    // Rubick
    86: ["rubick_telekinesis", "rubick_fade_bolt", "rubick_null_field", "rubick_spell_steal"],
    
    // Disruptor
    87: ["disruptor_thunder_strike", "disruptor_glimpse", "disruptor_kinetic_field", "disruptor_static_storm"],
    
    // Nyx Assassin
    88: ["nyx_assassin_impale", "nyx_assassin_mana_burn", "nyx_assassin_spiked_carapace", "nyx_assassin_vendetta"],
    
    // Naga Siren
    89: ["naga_siren_mirror_image", "naga_siren_ensnare", "naga_siren_rip_tide", "naga_siren_song_of_the_siren"],
    
    // Keeper of the Light
    90: ["keeper_of_the_light_illuminate", "keeper_of_the_light_blinding_light", "keeper_of_the_light_chakra_magic", "keeper_of_the_light_spirit_form"],
    
    // Io
    91: ["wisp_tether", "wisp_spirits", "wisp_overcharge", "wisp_relocate"],
    
    // Visage
    92: ["visage_grave_chill", "visage_soul_assumption", "visage_gravekeepers_cloak", "visage_summon_familiars"],
    
    // Slark
    93: ["slark_dark_pact", "slark_pounce", "slark_essence_shift", "slark_shadow_dance"],
    
    // Medusa
    94: ["medusa_split_shot", "medusa_mystic_snake", "medusa_mana_shield", "medusa_stone_gaze"],
    
    // Troll Warlord
    95: ["troll_warlord_berserkers_rage", "troll_warlord_whirling_axes_melee", "troll_warlord_fervor", "troll_warlord_battle_trance"],
    
    // Centaur Warrunner
    96: ["centaur_hoof_stomp", "centaur_double_edge", "centaur_return", "centaur_stampede"],
    
    // Magnus
    97: ["magnataur_shockwave", "magnataur_empower", "magnataur_skewer", "magnataur_reverse_polarity"],
    
    // Timbersaw
    98: ["shredder_whirling_death", "shredder_timber_chain", "shredder_reactive_armor", "shredder_chakram"],
    
    // Bristleback
    99: ["bristleback_viscous_nasal_goo", "bristleback_quill_spray", "bristleback_bristleback", "bristleback_warpath"],
    
    // Tusk
    100: ["tusk_ice_shards", "tusk_snowball", "generic_hidden", "tusk_walrus_punch"],
    
    // Skywrath Mage
    101: ["skywrath_mage_arcane_bolt", "skywrath_mage_concussive_shot", "skywrath_mage_ancient_seal", "skywrath_mage_mystic_flare"],
    
    // Abaddon
    102: ["abaddon_death_coil", "abaddon_aphotic_shield", "abaddon_frostmourne", "abaddon_borrowed_time"],
    
    // Elder Titan
    103: ["elder_titan_echo_stomp", "elder_titan_ancestral_spirit", "elder_titan_natural_order", "elder_titan_earth_splitter"],
    
    // Legion Commander
    104: ["legion_commander_overwhelming_odds", "legion_commander_press_the_attack", "legion_commander_moment_of_courage", "legion_commander_duel"],
    
    // Techies
    105: ["techies_sticky_bomb", "techies_reactive_tazer", "techies_suicide", "techies_land_mines"],
    
    // Ember Spirit
    106: ["ember_spirit_searing_chains", "ember_spirit_sleight_of_fist", "ember_spirit_flame_guard", "ember_spirit_fire_remnant"],
    
    // Earth Spirit
    107: ["earth_spirit_boulder_smash", "earth_spirit_rolling_boulder", "earth_spirit_geomagnetic_grip", "earth_spirit_magnetize"],
    
    // Underlord
    108: ["abyssal_underlord_firestorm", "abyssal_underlord_pit_of_malice", "abyssal_underlord_atrophy_aura", "abyssal_underlord_dark_rift"],
    
    // Terrorblade
    109: ["terrorblade_reflection", "terrorblade_conjure_image", "terrorblade_metamorphosis", "terrorblade_sunder"],
    
    // Phoenix
    110: ["phoenix_icarus_dive", "phoenix_fire_spirits", "phoenix_sun_ray", "phoenix_supernova"],
    
    // Oracle
    111: ["oracle_fortunes_end", "oracle_fates_edict", "oracle_purifying_flames", "oracle_false_promise"],
    
    // Winter Wyvern
    112: ["winter_wyvern_arctic_burn", "winter_wyvern_splinter_blast", "winter_wyvern_cold_embrace", "winter_wyvern_winters_curse"],
    
    // Arc Warden
    113: ["arc_warden_flux", "arc_warden_magnetic_field", "arc_warden_spark_wraith", "arc_warden_tempest_double"],
    
    // Monkey King
    114: ["monkey_king_boundless_strike", "monkey_king_tree_dance", "monkey_king_jingu_mastery", "monkey_king_wukongs_command"],
    
    // Dark Willow
    119: ["dark_willow_bramble_maze", "dark_willow_shadow_realm", "dark_willow_cursed_crown", "dark_willow_bedlam"],
    
    // Pangolier
    120: ["pangolier_swashbuckle", "pangolier_shield_crash", "pangolier_lucky_shot", "pangolier_gyroshell"],
    
    // Grimstroke
    121: ["grimstroke_dark_artistry", "grimstroke_ink_creature", "grimstroke_spirit_walk", "grimstroke_soul_chain"],
    
    // Hoodwink
    123: ["hoodwink_acorn_shot", "hoodwink_bushwhack", "hoodwink_scurry", "hoodwink_sharpshooter"],
    
    // Void Spirit
    126: ["void_spirit_aether_remnant", "void_spirit_dissimilate", "void_spirit_resonant_pulse", "void_spirit_astral_step"],
    
    // Snapfire
    128: ["snapfire_scatterblast", "snapfire_firesnap_cookie", "snapfire_lil_shredder", "snapfire_gobble_up"],
    
    // Mars
    129: ["mars_spear", "mars_gods_rebuke", "mars_bulwark", "mars_arena_of_blood"],
    
    // Dawnbreaker
    135: ["dawnbreaker_starbreaker", "dawnbreaker_celestial_hammer", "dawnbreaker_luminosity", "dawnbreaker_solar_guardian"],
    
    // Marci
    136: ["marci_grapple", "marci_companion_run", "marci_guardian", "marci_unleash"],
    
    // Primal Beast
    137: ["primal_beast_onslaught", "primal_beast_trample", "primal_beast_uproar", "primal_beast_pulverize"],
    
    // Muerta
    138: ["muerta_dead_shot", "muerta_the_calling", "muerta_gunslinger", "muerta_pierce_the_veil"],
    
    // Kez
    145: ["kez_echo_slash", "kez_grappling_claw", "kez_kazurai_katana","kez_ravens_veil"]
      
}
   
  
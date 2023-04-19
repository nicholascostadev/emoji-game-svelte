export type Level = {
	label: string;
	size: number;
	duration: number;
	emojis: string[];
};

export const levels: Level[] = [
	{
		label: 'easy',
		size: 4,
		duration: 60 * 1000,
		emojis:
			'🐶 🐱 🐭 🐹 🐰 🦊 🐻 🐼 🐻‍❄️ 🐨 🐯 🦁 🐮 🐷 🐽 🐸 🐵 🙈 🙉 🙊 🐒 🐔 🐧 🐦 🐤 🐣 🐥 🦆 🦅 🦉 🦇 🐺 🐗 🐴 🦄 🐝 🪱 🐛 🦋 🐌 🐞 🐜 🪰 🪲 🪳 🦟 🦗 🕷 🕸 🦂 🐢 🐍 🦎 🦖 🦕 🐙 🦑 🦐 🦞 🦀 🪸 🐡 🐠 🐟 🐬 🐳 🐋 🦈 🐊 🐅 🐆 🦓 🦍 🦧 🦣 🐘 🦛 🦏 🐪 🐫 🦒 🦘 🦬 🐃 🐂 🐄 🐎 🐖 🐏 🐑 🦙 🐐 🦌 🐕 🐩 🦮 🐕‍🦺 🐈 🐈‍⬛ 🪶 🐓 🦃 🦤 🦚 🦜 🦢 🦩 🕊 🐇 🦝 🦨 🦡 🦫 🦦 🦥 🐁 🐀 🐿 🦔'.split(
				' '
			)
	},
	{
		label: 'medium',
		size: 6,
		duration: 150 * 1000,
		emojis: 'green_apple apple pear tangerine lemon banana watermelon grapes strawberry blueberries melon cherries peach mango pineapple coconut kiwi_fruit tomato eggplant avocado broccoli leafy_green cucumber hot_pepper bell_pepper corn carrot olive garlic onion potato sweet_potato 🫘 croissant bagel bread baguette_bread pretzel cheese egg fried_egg butter pancakes waffle bacon cut_of_meat poultry_leg meat_on_bone bone hotdog hamburger fries pizza flatbread sandwich stuffed_flatbread falafel taco burrito tamale green_salad shallow_pan_of_food fondue canned_food spaghetti ramen stew curry sushi bento dumpling oyster fried_shrimp rice_ball rice rice_cracker fish_cake fortune_cookie moon_cake oden dango shaved_ice ice_cream icecream pie cupcake cake birthday custard lollipop candy chocolate_bar popcorn doughnut cookie chestnut peanuts honey_pot milk_glass baby_bottle teapot tea beverage_box cup_with_straw bubble_tea 🫙 sake beer beers clinking_glasses wine_glass 🫗 tumbler_glass cocktail tropical_drink mate champagne ice_cube spoon fork_and_knife plate_with_cutlery bowl_with_spoon takeout_box chopsticks salt'.split(' ')
	},
	{
		label: 'hard',
		size: 8,
		duration: 300 * 1000,
		emojis: 'grinning smiley smile grin laughing sweat_smile joy rofl smiling_face_with_tear 🥹 blush innocent slightly_smiling_face upside_down_face wink relieved heart_eyes smiling_face_with_three_hearts kissing_heart kissing kissing_smiling_eyes kissing_closed_eyes yum stuck_out_tongue stuck_out_tongue_closed_eyes stuck_out_tongue_winking_eye zany_face raised_eyebrow monocle_face nerd_face sunglasses disguised_face star_struck partying_face smirk unamused disappointed pensive worried confused slightly_frowning_face persevere confounded tired_face weary pleading_face cry sob face_exhaling triumph angry rage cursing_face exploding_head flushed hot_face cold_face scream fearful cold_sweat disappointed_relieved sweat 🫣 hugs 🫡 thinking 🫢 hand_over_mouth shushing_face lying_face no_mouth face_in_clouds neutral_face expressionless grimacing 🫠 roll_eyes hushed frowning anguished open_mouth astonished yawning_face sleeping drooling_face sleepy dizzy_face face_with_spiral_eyes 🫥 zipper_mouth_face woozy_face nauseated_face vomiting_face sneezing_face mask face_with_thermometer face_with_head_bandage money_mouth_face cowboy_hat_face smiling_imp imp japanese_ogre japanese_goblin clown_face hankey ghost skull alien space_invader robot jack_o_lantern smiley_cat smile_cat joy_cat heart_eyes_cat smirk_cat kissing_cat scream_cat crying_cat_face pouting_cat'.split(' ')
	}
];

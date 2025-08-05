type Tech = {
	key: string;
	category: 'Programming languages' | 'Tools' | 'Businesses' | 'Others';
	show?: boolean;
};

export const SHOW_RESUME = false;

// removed 'java' as it conflicts with javascript. Use jvm instead
export const technologiesToList: Tech[] = [
	{ key: 'ai', category: 'Others' },
	{ key: 'chatgpt', category: 'Others' },
	{ key: 'golang', category: 'Programming languages' },
	{ key: 'javascript', category: 'Programming languages' },
	{ key: 'js', category: 'Programming languages' },
	{ key: 'nodejs', category: 'Programming languages' },
	{ key: 'typescript', category: 'Programming languages' },

	// devops
	{ key: 'aws', category: 'Tools' },
	{ key: 'terraform', category: 'Tools' },

	// business
	{ key: 'finance', category: 'Businesses' },

	// random
	{ key: 'elasticsearch', category: 'Tools' },

	// old
	{ key: 'jvm', category: 'Programming languages', show: false },
	{ key: 'groovy', category: 'Programming languages', show: false },
	{ key: 'gradle', category: 'Tools', show: false },
	{ key: 'kotlin', category: 'Programming languages' },
	{ key: 'scala', category: 'Programming languages', show: false },
];

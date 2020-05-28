const _lstCategories = [
    "House And Home",
    "Maps And Navigation",
    "Health And Fitness",
    "Travel And Local",
    "Music And Audio",
    "Communication",
    "Tools",
    "Entertainment",
    "News And Magazines",
    "Shopping",
    "Events",
    "Dating",
    "Lifestyle",
    "Books And Reference",
    "Weather",
    "Business",
    "Finance",
    "Social",
    "Photography",
    "Food And Drink",
    "Video Players",
    "Productivity",
    "Parenting",
    "Education",
    "Auto And Vehicles",
    "Medical",
    "Sports"
];

const getCategories = (req, res) => 
{
	res.json(_lstCategories);
};

module.exports = 
{
	getCategories: getCategories
}
const _lstConditions = 
{
	equals:"===", 
	great:">",
	less:"<",
	greatEquals:">=",
	lessEquals:"<="
};

checkFilterCondition = (p_firstValue, p_strCondition, p_secondValue) => 
{
	switch (p_strCondition) 
	{
		case _lstConditions.equals:
			return (p_firstValue === p_secondValue);
		case _lstConditions.greatEquals:
			return (p_firstValue >= p_secondValue);
		case _lstConditions.lessEquals:
			return (p_firstValue <= p_secondValue);
		case _lstConditions.great:
			return (p_firstValue > p_secondValue);
		case _lstConditions.less:
			return (p_firstValue < p_secondValue);
		default:
			return false;
	}
};

module.exports = 
{
	Conditions: _lstConditions,
	checkFilterCondition: checkFilterCondition
}
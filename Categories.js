import style from './Category.module.css';

const Categories = ({ filterCategory, setFilterCategory }) => {

    const categoryOptions = [
        "Веган ястия",
        "Месни ястия",
        "Рецепти с глутен",
        "Рецепти без глутен",
    ];

    const onChange = ({ currentTarget: input }) => {
        if (input.checked) {
            const state = [...filterCategory, input.value]
            setFilterCategory(state)
        } else {
            const state = filterCategory.filter((val) => val !== input.value)
            setFilterCategory(state)
        }
    };
    return (
        <div className={style.categoryContainer}>
            {categoryOptions.map((category) => (
                <div key={category} className={style.checked} >
                    < input
                        type="checkbox"
                        value={category}
                        onChange={onChange}
                    />
                    <p className={style.text} > {category} </p>
                </div>
            ))}
        </div>
    )
};
export default Categories;

function List(){
    const list = ['kesavan','praba','harish','praveen','shaheen'];
    list.sort();
    const listItems = list.map(val => <li>{val}</li>)
    return(
        <ul>{listItems}</ul>
    )
}

export default List;
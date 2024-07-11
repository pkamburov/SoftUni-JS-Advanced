function solve(array, flavor1, flavor2) {

    let newArray = [];
    let firstIdx = array.indexOf(flavor1);
    let secondIdx = array.indexOf(flavor2) + 1;
    let spliced = array.splice(firstIdx, secondIdx);
    return spliced;

}


solve(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie');

solve(['Apple Crisp', 'Mississippi Mud Pie', 'Pot Pie', 'Steak and Cheese Pie', 'Butter Chicken Pie', 'Smoked Fish Pie'], 'Pot Pie', 'Smoked Fish Pie');

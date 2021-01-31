/* 
Name:         Roger Silva Santos Aguiar
Function:     It implements the linear search algorithm
Initial date: January 31, 2021
Last update:  January 31, 2021 
*/

"strict mode"

class LinearSearch
{
    constructor(quantity_of_numbers, end_number)
    {
        this.quantity_of_numbers = quantity_of_numbers;       
        this.end_number = end_number;
        document.getElementById("title").innerHTML = "Linear Learch";
    }

    generate_random_numbers = () =>
    {        
        let integer_array = [];

        for(var next_number = 0; next_number < this.quantity_of_numbers; next_number++)
        {
            integer_array.push(Math.floor(Math.random() * this.end_number));
        }

        integer_array.sort(function(a, b){return a - b});
        return integer_array;
    }

    display_array = (integer_array) =>
    {        
        for(let current_number = 0; current_number < integer_array.length; current_number++)
        {
            document.write(integer_array[current_number]);            
            
            if(current_number < this.quantity_of_numbers - 1)
            {
                document.write(" - ");                
            }
        }
    }

    execute_linear_search = (integer_array = [], searched_number) =>
    {
        let found_number = false;
        let number_position = 0;

        for(let number = 0; number < integer_array.length; number++)
        {
            if(integer_array[number] == searched_number)
            {
                found_number = true;
                number_position = number;
                break;
            }            
        }
        if(found_number == true)
        {
            document.write("<br /><br />The number was found at position " + number_position);
        }
        else
        {
            document.write("<br /><br />The number was not found.");
        }
    }
}

var quantity_of_numbers = prompt("Enter the quantity of numbers to be generated", 10);
var end_number = prompt("Enter the end number", 10);

var linear = new LinearSearch(quantity_of_numbers, end_number);
var integer_array = linear.generate_random_numbers();
linear.display_array(integer_array);

var searched_number = prompt("Enter the number you are searching for", 0);
linear.execute_linear_search(integer_array, parseInt(searched_number));
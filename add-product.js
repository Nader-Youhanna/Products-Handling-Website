function initialize()
{
    document.getElementById("size-label").style.display = "none";
    document.getElementById("size").style.display = "none";
    document.getElementById("width-label").style.display = "none";
    document.getElementById("width").style.display = "none";
    document.getElementById("height-label").style.display = "none";
    document.getElementById("height").style.display = "none";
    document.getElementById("length-label").style.display = "none";
    document.getElementById("length").style.display = "none";
    document.getElementById("weight-label").style.display = "none";
    document.getElementById("weight").style.display = "none";
}

function showAppropriate(selectedOption)
{
    if(selectedOption == "DVD")
    {
        document.getElementById("size-label").style.display = "block";
        document.getElementById("size").style.display = "block";
        document.getElementById("width-label").style.display = "none";
        document.getElementById("width").style.display = "none";
        document.getElementById("height-label").style.display = "none";
        document.getElementById("height").style.display = "none";
        document.getElementById("length-label").style.display = "none";
        document.getElementById("length").style.display = "none";
        document.getElementById("weight-label").style.display = "none";
        document.getElementById("weight").style.display = "none";
    }
    else if(selectedOption == "Furniture")
    {
        document.getElementById("size-label").style.display = "none";
        document.getElementById("size").style.display = "none";
        document.getElementById("width-label").style.display = "block";
        document.getElementById("width").style.display = "block";
        document.getElementById("height-label").style.display = "block";
        document.getElementById("height").style.display = "block";
        document.getElementById("length-label").style.display = "block";
        document.getElementById("length").style.display = "block";
        document.getElementById("weight-label").style.display = "none";
        document.getElementById("weight").style.display = "none";
    }
    else
    {
        document.getElementById("size-label").style.display = "none";
        document.getElementById("size").style.display = "none";
        document.getElementById("width-label").style.display = "none";
        document.getElementById("width").style.display = "none";
        document.getElementById("height-label").style.display = "none";
        document.getElementById("height").style.display = "none";
        document.getElementById("length-label").style.display = "none";
        document.getElementById("length").style.display = "none";
        document.getElementById("weight-label").style.display = "block";
        document.getElementById("weight").style.display = "block";
    }
}

function saveBtn()
{
    if(validateFrontEnd())
    {
        //Submit Form to BackEnd
        document.getElementById("product_form").submit();
    }
}

function validateFrontEnd()
{
    let sku = document.forms["product_form"]["SKU"].value;
    if(sku == "")
    {
        alert("SKU is required");
        return false;
    }

    let name = document.forms["product_form"]["name"].value;
    if(name == "")
    {
        alert("Name is required");
        return false;
    
    }

    let price = document.forms["product_form"]["price"].value;
    if(price == "")
    {
        alert("Price is required");
        return false;
    }
    else if(isNaN(price))
    {
        alert("Price must be a number");
        return false;
    }
    else if(price < 0)
    {
        alert("Price must be greater than 0");
        return false;
    }
    var e = document.getElementById("product_type");
    var type = e.selectedIndex;

    if(type == 0)
    {
        //No option selected
        alert("A product type must be selected");
    }
    if(type == 1)
    {
        //DVD
        let size = document.forms["product_form"]["size"].value;
        if(size == "")
        {
            alert("Size is required");
            return false;
        }
        else if(isNaN(size))
        {
            alert("Size must be a number");
            return false;
        }
        else if(size < 0)
        {
            alert("Size must be greater than 0");
            return false;
        }
    }
    else if(type == 2)
    {
        //Furniture
        let height = document.forms["product_form"]["height"].value;
        if(height == "")
        {
            alert("Height is required");
            return false;
        }
        else if(isNaN(height))
        {
            alert("Height must be a number");
            return false;
        }
        else if(height < 0)
        {
            alert("Height must be greater than 0");
            return false;
        }
        
        let width = document.forms["product_form"]["width"].value;
        if(width == "")
        {
            alert("Width is required");
            return false;
        }
        else if(isNaN(width))
        {
            alert("Width must be a number");
            return false;
        }
        else if(width < 0)
        {
            alert("Width must be greater than 0");
            return false;
        }

        

        let length = document.forms["product_form"]["length"].value;
        if(length == "")
        {
            alert("Length is required");
            return false;
        }
        else if(isNaN(length))
        {
            alert("Length must be a number");
            return false;
        }
        else if(length < 0)
        {
            alert("Length must be greater than 0");
            return false;
        }
    }
    else if(type == 3)
    {
        //Books
        let weight = document.forms["product_form"]["weight"].value;
        if(weight == "")
        {
            alert("Weight is required");
            return false;
        }
        else if(isNaN(weight))
        {
            alert("Weight must be a number");
            return false;
        }
        else if(weight < 0)
        {
            alert("Weight must be greater than 0");
            return false;
        }
    }
       
    return true;
}
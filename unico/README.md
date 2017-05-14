# Unico code test (React version)

## Setup / run

If using **yarn**

> Note:
> This will use ports 3000
> if they are already being used it will fail


`npm install`

`npm run start`

## NOTES

### Assumptions

I have made several assumptions in this exercise where the designs did not seem to make sense to me.

**Grid view && List View**

Generally, Grid and List icons are used to switch between list an tiles views of the product but here, based on the screen shtos, i assumed that grid view displays available products while list view displays cart

GridView --> available Products

ListView --> cart

In a Grid view, given that a product can be comprised of more than 1 item and theres no indication that 2 is the maximum amount allowed I have marked up and styled it so a tile can theoretically contain any number.

If a tile contains so many that it's width is wider than available on the right then it it will drop to the next line.

** Total Products and Total Cost **

It was not mentioned what exactly Total Products and Total Cost for whether it shows total available products or total products in carts. 

So here, I have assumed that it shows the total products in cart and their total cost

here, one product means 1 cartons. So if user has selected 5 cartons on 1st product and 3 cartons of 2nd Product then total product will be 8.



** Firebase **

To keep a feel of real time database, I have pushed a given payload file to a firebase and I am accessing data from there. 

If you want to test without firebase, then I have already put a json file as a data.
All you need to do is, 
--> comment line number 15   (which is taking data from firebase)
--> uncomment line number 16 (which is taking data from the json file)
in "actions/getProducts.js" file.


** Input Validation **

If user enters a number outside of 0-100 will be converted to default value 1.




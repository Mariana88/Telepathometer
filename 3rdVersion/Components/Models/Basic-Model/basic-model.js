
/* this design pattern does not work for my use case because creates a singleton object
 (all different "copies" are not vopies and will point to the same object). Must use either factory or inheritance. */

let model = {
    DB: {},
    type: '',
	nextId: 0,
	add: function(newItem) {
        let item;
        for (item in this.DB){
         let id = this.DB[item].id;
         if (id == newItem.id) {
                return "Item already exists";
            }
        }
        newItem.id = this.nextId;
        this.DB[newItem.id] = newItem;
        this.nextId++;
    },
	getItem: function(id) {
        return this.DB[id];
		},
	getAllItems: function(model) {
        return this.DB;
		},
	updateItem: function(item) {
        this.DB[item.id] = item;
		},
	remove: function(id) {
        delete this.DB[id];
		}
};

module.exports = model;
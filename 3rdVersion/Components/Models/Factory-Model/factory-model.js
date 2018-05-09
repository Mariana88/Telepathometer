function model_factory(type) {
	
	let new_obj = {
		type: type
	};

	let base_object = {
		DB: {},
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
	Object.assign(new_obj, base_object);

	return new_obj;
};

module.exports = model_factory;
_.templateSettings = {
    interpolate: /\{\{(.+?)\}\}/g
};

(function ($) {
 
    var contacts = [
        { name: "Contact 1", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com<script type="text/javascript">
/* <![CDATA[ */
(function(){try{var s,a,i,j,r,c,l,b=document.getElementsByTagName("script");l=b[b.length-1].previousSibling;a=l.getAttribute('data-cfemail');if(a){s='';r=parseInt(a.substr(0,2),16);for(j=2;a.length-j;j+=2){c=parseInt(a.substr(j,2),16)^r;s+=String.fromCharCode(c);}s=document.createTextNode(s);l.parentNode.replaceChild(s,l);}}catch(e){}})();
/* ]]> */
</script>", type: "family" },
        { name: "Contact 2", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com<script type="text/javascript">
/* <![CDATA[ */
(function(){try{var s,a,i,j,r,c,l,b=document.getElementsByTagName("script");l=b[b.length-1].previousSibling;a=l.getAttribute('data-cfemail');if(a){s='';r=parseInt(a.substr(0,2),16);for(j=2;a.length-j;j+=2){c=parseInt(a.substr(j,2),16)^r;s+=String.fromCharCode(c);}s=document.createTextNode(s);l.parentNode.replaceChild(s,l);}}catch(e){}})();
/* ]]> */
</script>", type: "family" },
        { name: "Contact 3", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com<script type="text/javascript">
/* <![CDATA[ */
(function(){try{var s,a,i,j,r,c,l,b=document.getElementsByTagName("script");l=b[b.length-1].previousSibling;a=l.getAttribute('data-cfemail');if(a){s='';r=parseInt(a.substr(0,2),16);for(j=2;a.length-j;j+=2){c=parseInt(a.substr(j,2),16)^r;s+=String.fromCharCode(c);}s=document.createTextNode(s);l.parentNode.replaceChild(s,l);}}catch(e){}})();
/* ]]> */
</script>", type: "friend" },
        { name: "Contact 4", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com<script type="text/javascript">
/* <![CDATA[ */
(function(){try{var s,a,i,j,r,c,l,b=document.getElementsByTagName("script");l=b[b.length-1].previousSibling;a=l.getAttribute('data-cfemail');if(a){s='';r=parseInt(a.substr(0,2),16);for(j=2;a.length-j;j+=2){c=parseInt(a.substr(j,2),16)^r;s+=String.fromCharCode(c);}s=document.createTextNode(s);l.parentNode.replaceChild(s,l);}}catch(e){}})();
/* ]]> */
</script>", type: "colleague" },
        { name: "Contact 5", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com<script type="text/javascript">
/* <![CDATA[ */
(function(){try{var s,a,i,j,r,c,l,b=document.getElementsByTagName("script");l=b[b.length-1].previousSibling;a=l.getAttribute('data-cfemail');if(a){s='';r=parseInt(a.substr(0,2),16);for(j=2;a.length-j;j+=2){c=parseInt(a.substr(j,2),16)^r;s+=String.fromCharCode(c);}s=document.createTextNode(s);l.parentNode.replaceChild(s,l);}}catch(e){}})();
/* ]]> */
</script>", type: "family" },
        { name: "Contact 6", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com<script type="text/javascript">
/* <![CDATA[ */
(function(){try{var s,a,i,j,r,c,l,b=document.getElementsByTagName("script");l=b[b.length-1].previousSibling;a=l.getAttribute('data-cfemail');if(a){s='';r=parseInt(a.substr(0,2),16);for(j=2;a.length-j;j+=2){c=parseInt(a.substr(j,2),16)^r;s+=String.fromCharCode(c);}s=document.createTextNode(s);l.parentNode.replaceChild(s,l);}}catch(e){}})();
/* ]]> */
</script>", type: "colleague" },
        { name: "Contact 7", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com<script type="text/javascript">
/* <![CDATA[ */
(function(){try{var s,a,i,j,r,c,l,b=document.getElementsByTagName("script");l=b[b.length-1].previousSibling;a=l.getAttribute('data-cfemail');if(a){s='';r=parseInt(a.substr(0,2),16);for(j=2;a.length-j;j+=2){c=parseInt(a.substr(j,2),16)^r;s+=String.fromCharCode(c);}s=document.createTextNode(s);l.parentNode.replaceChild(s,l);}}catch(e){}})();
/* ]]> */
</script>", type: "friend" },
        { name: "Contact 8", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com<script type="text/javascript">
/* <![CDATA[ */
(function(){try{var s,a,i,j,r,c,l,b=document.getElementsByTagName("script");l=b[b.length-1].previousSibling;a=l.getAttribute('data-cfemail');if(a){s='';r=parseInt(a.substr(0,2),16);for(j=2;a.length-j;j+=2){c=parseInt(a.substr(j,2),16)^r;s+=String.fromCharCode(c);}s=document.createTextNode(s);l.parentNode.replaceChild(s,l);}}catch(e){}})();
/* ]]> */
</script>", type: "family" }
    ];
 
} (jQuery));

var Contact = Backbone.Model.extend({
    defaults: {
        photo: "/img/placeholder.png"
        name: "",
        address: "",
        tel: "",
        email: "",
        type: ""
        url: function () {
    return "/ContactManager.asmx/ManageContact?id=" + this.get("id");
}
    }
    
});

var Directory = Backbone.Collection.extend({
    model: Contact
});

var ContactView = Backbone.View.extend({
    tagName: "article",
    className: "contact-container",
    template: $("#contactTemplate").html(),
    editTemplate: _.template($("#contactEditTemplate").html()),
 
    render: function () {
        var tmpl = _.template(this.template);
 
        this.$el.html(tmpl(this.model.toJSON()));
        return this;
        
    }
    events: {
    "click button.delete": "deleteContact"
},
 
deleteContact: function () {
   var removedType = this.model.get("type").toLowerCase();
 
    this.model.destroy();
 
    this.remove();
 
    if (_.indexOf(directory.getTypes(), removedType) === -1) {
        directory.$el.find("#filter select").children("[value='" + removedType + "']").remove();
    }
}
editContact: function () {
    this.$el.html(this.editTemplate(this.model.toJSON()));
 
    var newOpt = $("<option/>", {
        html: "<em>Add new...</em>",
        value: "addType"   
    }),
 
    this.select = directory.createSelect().addClass("type")
        .val(this.$el.find("#type").val()).append(newOpt)
        .insertAfter(this.$el.find(".name"));
 
    this.$el.find("input[type='hidden']").remove();
},
if (this.select.val() === "addType") {
    this.select.remove();
 
    $("<input />", {
        "class": "type"
    }).insertAfter(this.$el.find(".name")).focus();
}
saveEdits: function (e) {
   e.preventDefault();
   this.model.set(formData).save();
 
    var formData = {},
        prev = this.model.previousAttributes();
 
    $(e.target).closest("form").find(":input").add(".photo").each(function () {
 
        var el = $(this);
        formData[el.attr("class")] = el.val();
    });
 
    if (formData.photo === "") {
        delete formData.photo;
    }
 
    this.model.set(formData);
 
    this.render();
 
    if (prev.photo === "/img/placeholder.png") {
        delete prev.photo;
    }
 
    _.each(contacts, function (contact) {
        if (_.isEqual(contact, prev)) {
            contacts.splice(_.indexOf(contacts, contact), 1, formData);
        }
    });
},

cancelEdit: function () {
    this.render();
},
});

var DirectoryView = Backbone.View.extend({
    el: $("#contacts"),
 
    initialize: function () {
        this.collection = new Directory(contacts);
        this.render();
        this.$el.find("#filter").append(this.createSelect());
        this.on("change:filterType", this.filterByType, this);
        this.collection.on("reset", this.render, this);
        this.collection.on("add", this.renderContact, this);
        this.collection.on("remove", this.removeContact, this);
    },
 
    render: function () {
        var that = this;
        _.each(this.collection.models, function (item) {
            that.renderContact(item);
        }, this);
    },
 
    renderContact: function (item) {
        var contactView = new ContactView({
            model: item
        });
        this.$el.append(contactView.render().el);
    }
    getTypes: function () {
    return _.uniq(this.collection.pluck("type"), false, function (type) {
        return type.toLowerCase();
    });
},

var ContactsRouter = Backbone.Router.extend({
    routes: {
        "filter/:type": "urlFilter"
    },
 
    urlFilter: function (type) {
        directory.filterType = type;
        directory.trigger("change:filterType");
    }
});
 
createSelect: function () {
    var filter = this.el.find("#filter"),
        select = $("<select/>", {
            html: "<option>All</option>"
        });
 
    _.each(this.getTypes(), function (item) {
        var option = $("<option/>", {
            value: item.toLowerCase(),
            text: item.toLowerCase()
        }).appendTo(select);
    });
    return select;
}



events: {
    "change #filter select": "setFilter"
    "click #add": "addContact"
    "click #showForm": "showForm"
    "click button.edit": "editContact",
"change select.type": "addType",
"click button.save": "saveEdits",
"click button.cancel": "cancelEdit"
},

setFilter: function (e) {
    this.filterType = e.currentTarget.value;
    this.trigger("change:filterType");
},
filterByType: function () {
    if (this.filterType === "all") {
        this.collection.reset(contacts);
 
        <b>contactsRouter.navigate("filter/all");</b>
 
    } else {
        this.collection.reset(contacts, { silent: true });
 
        var filterType = this.filterType,
            filtered = _.filter(this.collection.models, function (item) {
                return item.get("type") === filterType;
        });
 
        this.collection.reset(filtered);
 
        <b>contactsRouter.navigate("filter/" + filterType);</b>
    }
}
addContact: function (e) {
    e.preventDefault();
 
    var newModel = {};
    $("#addContact").children("input").each(function (i, el) {
        if ($(el).val() !== "") {
            newModel[el.id] = $(el).val();
      }
    });
 
    contacts.push(formData);
 
    if (_.indexOf(this.getTypes(), formData.type) === -1) {
    this.$el.find("#filter").find("select").remove().end().append(this.createSelect());
}
 

    } else {
        this.collection.create(formData);
    }
}
showForm: function () {
    this.$el.find("#addContact").slideToggle();
}
});
removeContact: function (removedModel) {
    var removed = removedModel.attributes;
 
    if (removed.photo === "/img/placeholder.png") {
        delete removed.photo;
    }
 
    _.each(contacts, function (contact) {
        if (_.isEqual(contact, removed)) {
            contacts.splice(_.indexOf(contacts, contact), 1);
        }
    });
}

var directory = new DirectoryView();
var contactsRouter = new ContactsRouter();
Backbone.history.start();


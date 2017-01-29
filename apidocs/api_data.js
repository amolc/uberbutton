define({ "api": [
  {
    "type": "get",
    "url": "/shop/deleteCategory/:id",
    "title": "delete particuler category from database",
    "name": "deleteCategory",
    "group": "_ShopOwner_category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "catg_id",
            "description": "<p>Category id to delete particule record from primary key.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/shopowner/category.js",
    "groupTitle": "_ShopOwner_category"
  },
  {
    "type": "get",
    "url": "/shop/allcategory",
    "title": "generate list of categories",
    "name": "findAll",
    "group": "_ShopOwner_category",
    "version": "0.0.0",
    "filename": "api/shopowner/category.js",
    "groupTitle": "_ShopOwner_category"
  },
  {
    "type": "get",
    "url": "/shop/getcategory/:id",
    "title": "get particuler category details",
    "name": "findById",
    "group": "_ShopOwner_category",
    "version": "0.0.0",
    "filename": "api/shopowner/category.js",
    "groupTitle": "_ShopOwner_category"
  },
  {
    "type": "post",
    "url": "/shop/addcategory/",
    "title": "add new category",
    "name": "insertCategory",
    "group": "_ShopOwner_category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "catg_name",
            "description": "<p>Mandatory Category Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "catg_description",
            "description": "<p>Mandatory category description.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "catg_alias",
            "description": "<p>Mandatory category alias without space.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "vendor_id",
            "description": "<p>Loggedin users vendor id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "maincatg_id",
            "description": "<p>Main Category table foreign key.</p>"
          }
        ],
        "Login": [
          {
            "group": "Login",
            "type": "String",
            "optional": false,
            "field": "pass",
            "description": "<p>Only logged in users can post this. In generated documentation a separate &quot;Login&quot; Block will be generated.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/shopowner/category.js",
    "groupTitle": "_ShopOwner_category"
  },
  {
    "type": "post",
    "url": "/shop/editcategory/",
    "title": "update category details",
    "name": "updateCategory",
    "group": "_ShopOwner_category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "catg_id",
            "description": "<p>Category id to update particule record from primary key.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "catg_name",
            "description": "<p>Mandatory Category Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "catg_description",
            "description": "<p>Mandatory category description.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "catg_alias",
            "description": "<p>Mandatory category alias without space.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "vendor_id",
            "description": "<p>Loggedin users vendor id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "maincatg_id",
            "description": "<p>Main Category table foreign key.</p>"
          }
        ],
        "Login": [
          {
            "group": "Login",
            "type": "String",
            "optional": false,
            "field": "pass",
            "description": "<p>Only logged in users can post this. In generated documentation a separate &quot;Login&quot; Block will be generated.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/shopowner/category.js",
    "groupTitle": "_ShopOwner_category"
  },
  {
    "type": "get",
    "url": "/shop/deleteDiscount/:id",
    "title": "delete particuler discount from database",
    "name": "deleteDiscount",
    "group": "_ShopOwner_discount",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "discount_id",
            "description": "<p>Discount id to delete particule record from primary key.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/shopowner/discount.js",
    "groupTitle": "_ShopOwner_discount"
  },
  {
    "type": "get",
    "url": "/shop/alldiscounts",
    "title": "generate list of categories",
    "name": "findAll",
    "group": "_ShopOwner_discount",
    "version": "0.0.0",
    "filename": "api/shopowner/discount.js",
    "groupTitle": "_ShopOwner_discount"
  },
  {
    "type": "get",
    "url": "/shop/getdiscounts/:id",
    "title": "get particuler discount details",
    "name": "findById",
    "group": "_ShopOwner_discount",
    "version": "0.0.0",
    "filename": "api/shopowner/discount.js",
    "groupTitle": "_ShopOwner_discount"
  },
  {
    "type": "post",
    "url": "/shop/adddiscount/",
    "title": "add new discount",
    "name": "insertDiscount",
    "group": "_ShopOwner_discount",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "discount_name",
            "description": "<p>Mandatory discount name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "discount_desc",
            "description": "<p>Mandatory discount description.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "discount_from_date",
            "description": "<p>Mandatory discount_from_date.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "discount_to_date",
            "description": "<p>Mandatory discount_to_date.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "discount_perc",
            "description": "<p>Mandatory discount_perc.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "product_id",
            "description": "<p>Mandatory product_id to apply discount on particular products.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "vendor_id",
            "description": "<p>Mandatory vendor_id to apply discount for vendor own products.</p>"
          }
        ],
        "Login": [
          {
            "group": "Login",
            "type": "String",
            "optional": false,
            "field": "pass",
            "description": "<p>Only logged in users can post this. In generated documentation a separate &quot;Login&quot; Block will be generated.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/shopowner/discount.js",
    "groupTitle": "_ShopOwner_discount"
  },
  {
    "type": "post",
    "url": "/shop/editdiscount/",
    "title": "update discount details",
    "name": "updateDiscount",
    "group": "_ShopOwner_discount",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "discount_name",
            "description": "<p>Mandatory discount name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "discount_desc",
            "description": "<p>Mandatory discount description.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "discount_from_date",
            "description": "<p>Mandatory discount_from_date.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "discount_to_date",
            "description": "<p>Mandatory discount_to_date.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "discount_perc",
            "description": "<p>Mandatory discount_perc.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "product_id",
            "description": "<p>Mandatory product_id to apply discount on particular products.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "vendor_id",
            "description": "<p>Mandatory vendor_id to apply discount for vendor own products.</p>"
          }
        ],
        "Login": [
          {
            "group": "Login",
            "type": "String",
            "optional": false,
            "field": "pass",
            "description": "<p>Only logged in users can post this. In generated documentation a separate &quot;Login&quot; Block will be generated.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/shopowner/discount.js",
    "groupTitle": "_ShopOwner_discount"
  },
  {
    "type": "get",
    "url": "/shop/deleteProduct/:id",
    "title": "delete particuler product from database",
    "name": "deleteProduct",
    "group": "_ShopOwner_product",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "product_id",
            "description": "<p>Product id to delete particule record from primary key.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/shopowner/product.js",
    "groupTitle": "_ShopOwner_product"
  },
  {
    "type": "get",
    "url": "/shop/allproduct",
    "title": "generate list of products",
    "name": "findAll",
    "group": "_ShopOwner_product",
    "version": "0.0.0",
    "filename": "api/shopowner/product.js",
    "groupTitle": "_ShopOwner_product"
  },
  {
    "type": "get",
    "url": "/shop/getproduct/:id",
    "title": "get particuler product details",
    "name": "findById",
    "group": "_ShopOwner_product",
    "version": "0.0.0",
    "filename": "api/shopowner/product.js",
    "groupTitle": "_ShopOwner_product"
  },
  {
    "type": "post",
    "url": "/shop/addproduct/",
    "title": "add new product",
    "name": "insertProduct",
    "group": "_ShopOwner_product",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "product_name",
            "description": "<p>Mandatory Product Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "product_description",
            "description": "<p>Mandatory Product description.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "product_price",
            "description": "<p>Mandatory Product alias without space.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "qtytype_id",
            "description": "<p>Mandatory Product Quantity foreign key.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "Size",
            "description": "<p>optional product size.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "colour_id",
            "description": "<p>optional product color foreign key.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "vendor_id",
            "description": "<p>Admin will select vendor id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "maincatg_id",
            "description": "<p>Mandatory Main Category table foreign key.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "catg_id",
            "description": "<p>Mandatory category table foreign key.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "subcatg_id",
            "description": "<p>Sub Category table foreign key.</p>"
          }
        ],
        "Login": [
          {
            "group": "Login",
            "type": "String",
            "optional": false,
            "field": "pass",
            "description": "<p>Only logged in users can post this. In generated documentation a separate &quot;Login&quot; Block will be generated.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/shopowner/product.js",
    "groupTitle": "_ShopOwner_product"
  },
  {
    "type": "post",
    "url": "/shop/editproduct/",
    "title": "update product details",
    "name": "updateProduct",
    "group": "_ShopOwner_product",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "product_id",
            "description": "<p>Mandatory product id to update particuler record.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "product_name",
            "description": "<p>Mandatory Product Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "product_description",
            "description": "<p>Mandatory Product description.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "product_price",
            "description": "<p>Mandatory Product alias without space.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "qtytype_id",
            "description": "<p>Mandatory Product Quantity foreign key.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "size",
            "description": "<p>optional product size.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "colour_id",
            "description": "<p>optional product color foreign key.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "vendor_id",
            "description": "<p>Admin will select vendor id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "maincatg_id",
            "description": "<p>Mandatory Main Category table foreign key.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "catg_id",
            "description": "<p>Mandatory category table foreign key.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "subcatg_id",
            "description": "<p>Sub Category table foreign key.</p>"
          }
        ],
        "Login": [
          {
            "group": "Login",
            "type": "String",
            "optional": false,
            "field": "pass",
            "description": "<p>Only logged in users can post this. In generated documentation a separate &quot;Login&quot; Block will be generated.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/shopowner/product.js",
    "groupTitle": "_ShopOwner_product"
  },
  {
    "type": "get",
    "url": "/shop/deletesubCategory/:id",
    "title": "delete particuler sub category from database",
    "name": "deleteSubCategory",
    "group": "_ShopOwner_sub_category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "subcatg_id",
            "description": "<p>Sub Category id to delete particule record from primary key.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/shopowner/sub_category.js",
    "groupTitle": "_ShopOwner_sub_category"
  },
  {
    "type": "get",
    "url": "/shop/allsubcategory",
    "title": "generate list of categories",
    "name": "findAll",
    "group": "_ShopOwner_sub_category",
    "version": "0.0.0",
    "filename": "api/shopowner/sub_category.js",
    "groupTitle": "_ShopOwner_sub_category"
  },
  {
    "type": "get",
    "url": "/shop/getsubcategory/:id",
    "title": "get particuler category details",
    "name": "findById",
    "group": "_ShopOwner_sub_category",
    "version": "0.0.0",
    "filename": "api/shopowner/sub_category.js",
    "groupTitle": "_ShopOwner_sub_category"
  },
  {
    "type": "post",
    "url": "/shop/addsubcategory/",
    "title": "add new category",
    "name": "insertSubCategory",
    "group": "_ShopOwner_sub_category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "catg_id",
            "description": "<p>Category id to update particule record from forgien key.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subcatg_name",
            "description": "<p>Mandatory Sub Category Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subcatg_description",
            "description": "<p>Mandatory sub category description.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subcatg_alias",
            "description": "<p>Mandatory sub category alias without space.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "vendor_id",
            "description": "<p>Loggedin users vendor id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "maincatg_id",
            "description": "<p>Main Category table forgien key.</p>"
          }
        ],
        "Login": [
          {
            "group": "Login",
            "type": "String",
            "optional": false,
            "field": "pass",
            "description": "<p>Only logged in users can post this. In generated documentation a separate &quot;Login&quot; Block will be generated.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/shopowner/sub_category.js",
    "groupTitle": "_ShopOwner_sub_category"
  },
  {
    "type": "post",
    "url": "/shop/editsubcategory/",
    "title": "update category details",
    "name": "updateSubCategory",
    "group": "_ShopOwner_sub_category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "subcatg_id",
            "description": "<p>Sub Category id to update particule record from primary key.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "catg_id",
            "description": "<p>Category id to update particule record from foreign key.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subcatg_name",
            "description": "<p>Mandatory Sub Category Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subcatg_description",
            "description": "<p>Mandatory sub category description.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subcatg_alias",
            "description": "<p>Mandatory sub category alias without space.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "vendor_id",
            "description": "<p>Loggedin users vendor id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "maincatg_id",
            "description": "<p>Main Category table forgien key.</p>"
          }
        ],
        "Login": [
          {
            "group": "Login",
            "type": "String",
            "optional": false,
            "field": "pass",
            "description": "<p>Only logged in users can post this. In generated documentation a separate &quot;Login&quot; Block will be generated.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/shopowner/sub_category.js",
    "groupTitle": "_ShopOwner_sub_category"
  },
  {
    "type": "get",
    "url": "/shop/deleteVendor/:id",
    "title": "delete particuler vendor from database",
    "name": "deleteVendor",
    "group": "_ShopOwner_vendors",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "vendor_id",
            "description": "<p>Vendor id to delete particule record from primary key.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/shopowner/vendors.js",
    "groupTitle": "_ShopOwner_vendors"
  },
  {
    "type": "get",
    "url": "/shop/allVendors",
    "title": "generate list of vendors",
    "name": "findAll",
    "group": "_ShopOwner_vendors",
    "version": "0.0.0",
    "filename": "api/shopowner/vendors.js",
    "groupTitle": "_ShopOwner_vendors"
  },
  {
    "type": "get",
    "url": "/shop/getvendor/:id",
    "title": "get particuler vendor details",
    "name": "findById",
    "group": "_ShopOwner_vendors",
    "version": "0.0.0",
    "filename": "api/shopowner/vendors.js",
    "groupTitle": "_ShopOwner_vendors"
  },
  {
    "type": "post",
    "url": "/shop/addvendor/",
    "title": "add new vendor",
    "name": "insertVendor",
    "group": "_ShopOwner_vendors",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "first_name",
            "description": "<p>Mandatory vendor first_name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "last_name",
            "description": "<p>Mandatory vendor last_name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email_id",
            "description": "<p>Mandatory vendor email_id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_type",
            "description": "<p>Mandatory user_type.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Mandatory password.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "company_name",
            "description": "<p>Mandatory company_name.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "mobile_number",
            "description": "<p>Mandatory mobile_number.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "country_id",
            "description": "<p>Mandatory vendor country_id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Mandatory vendor address.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "apartment",
            "description": "<p>Mandatory vendor apartment.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "city_id",
            "description": "<p>Mandatory city_id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "state_id",
            "description": "<p>Mandatory state_id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "zip",
            "description": "<p>Mandatory zip.</p>"
          }
        ],
        "Login": [
          {
            "group": "Login",
            "type": "String",
            "optional": false,
            "field": "pass",
            "description": "<p>Only logged in users can post this. In generated documentation a separate &quot;Login&quot; Block will be generated.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/shopowner/vendors.js",
    "groupTitle": "_ShopOwner_vendors"
  },
  {
    "type": "get",
    "url": "/shop/deleteVendortaxmaster/:id",
    "title": "delete particuler vendor from database",
    "name": "deleteVendortaxmaster",
    "group": "_ShopOwner_vendorstaxmaster",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "srno",
            "description": "<p>Vendor tax master id to delete particular record from primary key.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/shopowner/vendor_tax_master.js",
    "groupTitle": "_ShopOwner_vendorstaxmaster"
  },
  {
    "type": "get",
    "url": "/shop/allVendorsTaxMaster",
    "title": "generate list of vendors tax master",
    "name": "findAll",
    "group": "_ShopOwner_vendorstaxmaster",
    "version": "0.0.0",
    "filename": "api/shopowner/vendor_tax_master.js",
    "groupTitle": "_ShopOwner_vendorstaxmaster"
  },
  {
    "type": "get",
    "url": "/shop/getvendortaxmaster/:id",
    "title": "get particuler vendor details",
    "name": "findById",
    "group": "_ShopOwner_vendorstaxmaster",
    "version": "0.0.0",
    "filename": "api/shopowner/vendor_tax_master.js",
    "groupTitle": "_ShopOwner_vendorstaxmaster"
  },
  {
    "type": "post",
    "url": "/shop/addvendortaxmaster/",
    "title": "add new vendor",
    "name": "insertVendortax",
    "group": "_ShopOwner_vendorstaxmaster",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "vendor_id",
            "description": "<p>Mandatory vendor_id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "TaxId",
            "description": "<p>Mandatory TaxId forgien key of taxmasters.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "TaxDesc",
            "description": "<p>Mandatory vendor Tax Desc.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "TaxName",
            "description": "<p>Mandatory TaxName.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "TaxPerc",
            "description": "<p>Mandatory TaxPerc.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "IsApplicable",
            "description": "<p>Mandatory IsApplicable.</p>"
          }
        ],
        "Login": [
          {
            "group": "Login",
            "type": "String",
            "optional": false,
            "field": "pass",
            "description": "<p>Only logged in users can post this. In generated documentation a separate &quot;Login&quot; Block will be generated.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/shopowner/vendor_tax_master.js",
    "groupTitle": "_ShopOwner_vendorstaxmaster"
  },
  {
    "type": "post",
    "url": "/shop/editvendortaxmaster/",
    "title": "update vendor details",
    "name": "updateVendorTaxMaster",
    "group": "_ShopOwner_vendorstaxmaster",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "vendor_id",
            "description": "<p>Mandatory vendor_id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "TaxId",
            "description": "<p>Mandatory TaxId forgien key of taxmasters.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "TaxDesc",
            "description": "<p>Mandatory vendor Tax Desc.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "TaxName",
            "description": "<p>Mandatory TaxName.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "TaxPerc",
            "description": "<p>Mandatory TaxPerc.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "IsApplicable",
            "description": "<p>Mandatory IsApplicable</p>"
          }
        ],
        "Login": [
          {
            "group": "Login",
            "type": "String",
            "optional": false,
            "field": "pass",
            "description": "<p>Only logged in users can post this. In generated documentation a separate &quot;Login&quot; Block will be generated.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/shopowner/vendor_tax_master.js",
    "groupTitle": "_ShopOwner_vendorstaxmaster"
  },
  {
    "type": "post",
    "url": "/shop/editvendor/",
    "title": "update vendor details",
    "name": "updateVendor",
    "group": "_ShopOwner_vendors",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "first_name",
            "description": "<p>Mandatory vendor first_name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "last_name",
            "description": "<p>Mandatory vendor last_name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email_id",
            "description": "<p>Mandatory vendor email_id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_type",
            "description": "<p>Mandatory user_type.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Mandatory password.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "company_name",
            "description": "<p>Mandatory company_name.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "mobile_number",
            "description": "<p>Mandatory mobile_number.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "country_id",
            "description": "<p>Mandatory vendor country_id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Mandatory vendor address.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "apartment",
            "description": "<p>Mandatory vendor apartment.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "city_id",
            "description": "<p>Mandatory city_id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "state_id",
            "description": "<p>Mandatory state_id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "zip",
            "description": "<p>Mandatory zip.</p>"
          }
        ],
        "Login": [
          {
            "group": "Login",
            "type": "String",
            "optional": false,
            "field": "pass",
            "description": "<p>Only logged in users can post this. In generated documentation a separate &quot;Login&quot; Block will be generated.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/shopowner/vendors.js",
    "groupTitle": "_ShopOwner_vendors"
  },
  {
    "type": "get",
    "url": "/admin/deleteCategory/:id",
    "title": "delete particuler category from database",
    "name": "deleteCategory",
    "group": "_admin_category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "catg_id",
            "description": "<p>Category id to delete particule record from primary key.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/sadmin/category.js",
    "groupTitle": "_admin_category"
  },
  {
    "type": "get",
    "url": "/admin/allcategory",
    "title": "generate list of categories",
    "name": "findAll",
    "group": "_admin_category",
    "version": "0.0.0",
    "filename": "api/sadmin/category.js",
    "groupTitle": "_admin_category"
  },
  {
    "type": "get",
    "url": "/admin/getcategory/:id",
    "title": "get particuler category details",
    "name": "findById",
    "group": "_admin_category",
    "version": "0.0.0",
    "filename": "api/sadmin/category.js",
    "groupTitle": "_admin_category"
  },
  {
    "type": "post",
    "url": "/admin/addcategory/",
    "title": "add new category",
    "name": "insertCategory",
    "group": "_admin_category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "admin_id",
            "description": "<p>Loggedin admin user id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "catg_name",
            "description": "<p>Mandatory Category Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "catg_description",
            "description": "<p>Mandatory category description.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "catg_alias",
            "description": "<p>Mandatory category alias without space.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "vendor_id",
            "description": "<p>Loggedin users vendor id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "maincatg_id",
            "description": "<p>Main Category table foreign key.</p>"
          }
        ],
        "Login": [
          {
            "group": "Login",
            "type": "String",
            "optional": false,
            "field": "pass",
            "description": "<p>Only logged in users can post this. In generated documentation a separate &quot;Login&quot; Block will be generated.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/sadmin/category.js",
    "groupTitle": "_admin_category"
  },
  {
    "type": "post",
    "url": "/admin/editcategory/",
    "title": "update category details",
    "name": "updateCategory",
    "group": "_admin_category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "catg_id",
            "description": "<p>Category id to update particule record from primary key.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "admin_id",
            "description": "<p>Loggedin admin user id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "catg_name",
            "description": "<p>Mandatory Category Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "catg_description",
            "description": "<p>Mandatory category description.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "catg_alias",
            "description": "<p>Mandatory category alias without space.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "vendor_id",
            "description": "<p>Loggedin users vendor id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "maincatg_id",
            "description": "<p>Main Category table foreign key.</p>"
          }
        ],
        "Login": [
          {
            "group": "Login",
            "type": "String",
            "optional": false,
            "field": "pass",
            "description": "<p>Only logged in users can post this. In generated documentation a separate &quot;Login&quot; Block will be generated.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/sadmin/category.js",
    "groupTitle": "_admin_category"
  },
  {
    "type": "get",
    "url": "/admin/deletemaincategory/:id",
    "title": "delete particuler category from database",
    "name": "deleteMainCategory",
    "group": "_admin_main_category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "maincatg_id",
            "description": "<p>Category id to delete particule record from primary key.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/sadmin/main_category.js",
    "groupTitle": "_admin_main_category"
  },
  {
    "type": "get",
    "url": "/admin/maincategory",
    "title": "list main categories",
    "name": "findAll",
    "group": "_admin_main_category",
    "version": "0.0.0",
    "filename": "api/sadmin/main_category.js",
    "groupTitle": "_admin_main_category"
  },
  {
    "type": "get",
    "url": "/admin/getmaincategory/:id",
    "title": "get particuler category details",
    "name": "findById",
    "group": "_admin_main_category",
    "version": "0.0.0",
    "filename": "api/sadmin/main_category.js",
    "groupTitle": "_admin_main_category"
  },
  {
    "type": "post",
    "url": "/admin/addmaincategory/",
    "title": "add new category",
    "name": "insertMainCategory",
    "group": "_admin_main_category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "maincatg_name",
            "description": "<p>Mandatory Category Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "maincatg_description",
            "description": "<p>Mandatory category description.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "maincatg_alias",
            "description": "<p>Mandatory category alias without space.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "admin_id",
            "description": "<p>Loggedin admin user id.</p>"
          }
        ],
        "Login": [
          {
            "group": "Login",
            "type": "String",
            "optional": false,
            "field": "pass",
            "description": "<p>Only logged in users can post this. In generated documentation a separate &quot;Login&quot; Block will be generated.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/sadmin/main_category.js",
    "groupTitle": "_admin_main_category"
  },
  {
    "type": "post",
    "url": "/admin/editmaincategory/",
    "title": "add new category",
    "name": "updateMainCategory",
    "group": "_admin_main_category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "maincatg_id",
            "description": "<p>Mandatory Category id to update particuler record.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "maincatg_name",
            "description": "<p>Mandatory Category Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "maincatg_description",
            "description": "<p>Mandatory category description.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "maincatg_alias",
            "description": "<p>Mandatory category alias without space.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "admin_id",
            "description": "<p>Loggedin admin user id.</p>"
          }
        ],
        "Login": [
          {
            "group": "Login",
            "type": "String",
            "optional": false,
            "field": "pass",
            "description": "<p>Only logged in users can post this. In generated documentation a separate &quot;Login&quot; Block will be generated.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/sadmin/main_category.js",
    "groupTitle": "_admin_main_category"
  },
  {
    "type": "get",
    "url": "/admin/deleteProduct/:id",
    "title": "delete particuler product from database",
    "name": "deleteProduct",
    "group": "_admin_product",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "product_id",
            "description": "<p>Product id to delete particule record from primary key.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/sadmin/product.js",
    "groupTitle": "_admin_product"
  },
  {
    "type": "get",
    "url": "/admin/allproduct",
    "title": "generate list of products",
    "name": "findAll",
    "group": "_admin_product",
    "version": "0.0.0",
    "filename": "api/sadmin/product.js",
    "groupTitle": "_admin_product"
  },
  {
    "type": "get",
    "url": "/admin/getproduct/:id",
    "title": "get particuler product details",
    "name": "findById",
    "group": "_admin_product",
    "version": "0.0.0",
    "filename": "api/sadmin/product.js",
    "groupTitle": "_admin_product"
  },
  {
    "type": "post",
    "url": "/admin/addproduct/",
    "title": "add new product",
    "name": "insertProduct",
    "group": "_admin_product",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "product_name",
            "description": "<p>Mandatory Product Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "product_description",
            "description": "<p>Mandatory Product description.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "product_price",
            "description": "<p>Mandatory Product alias without space.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "qtytype_id",
            "description": "<p>Mandatory Product Quantity foreign key.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "Size",
            "description": "<p>optional product size.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "colour_id",
            "description": "<p>optional product color foreign key.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "vendor_id",
            "description": "<p>Admin will select vendor id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "maincatg_id",
            "description": "<p>Mandatory Main Category table foreign key.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "catg_id",
            "description": "<p>Mandatory category table foreign key.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "subcatg_id",
            "description": "<p>Sub Category table foreign key.</p>"
          }
        ],
        "Login": [
          {
            "group": "Login",
            "type": "String",
            "optional": false,
            "field": "pass",
            "description": "<p>Only logged in users can post this. In generated documentation a separate &quot;Login&quot; Block will be generated.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/sadmin/product.js",
    "groupTitle": "_admin_product"
  },
  {
    "type": "post",
    "url": "/admin/editproduct/",
    "title": "update product details",
    "name": "updateProduct",
    "group": "_admin_product",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "product_id",
            "description": "<p>Mandatory product id to update particuler record.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "product_name",
            "description": "<p>Mandatory Product Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "product_description",
            "description": "<p>Mandatory Product description.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "product_price",
            "description": "<p>Mandatory Product alias without space.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "qtytype_id",
            "description": "<p>Mandatory Product Quantity foreign key.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "size",
            "description": "<p>optional product size.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "colour_id",
            "description": "<p>optional product color foreign key.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "vendor_id",
            "description": "<p>Admin will select vendor id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "maincatg_id",
            "description": "<p>Mandatory Main Category table foreign key.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "catg_id",
            "description": "<p>Mandatory category table foreign key.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "subcatg_id",
            "description": "<p>Sub Category table foreign key.</p>"
          }
        ],
        "Login": [
          {
            "group": "Login",
            "type": "String",
            "optional": false,
            "field": "pass",
            "description": "<p>Only logged in users can post this. In generated documentation a separate &quot;Login&quot; Block will be generated.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/sadmin/product.js",
    "groupTitle": "_admin_product"
  },
  {
    "type": "get",
    "url": "/admin/deleteqtytypes/:id",
    "title": "delete particuler QtyTypes from database",
    "name": "deleteQtyTypes",
    "group": "_admin_qtytypes",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "QtyType_id",
            "description": "<p>Qty type id to delete particule record from primary key.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/sadmin/qtytypes.js",
    "groupTitle": "_admin_qtytypes"
  },
  {
    "type": "get",
    "url": "/admin/allqtytypes",
    "title": "generate list of users",
    "name": "findAll",
    "group": "_admin_qtytypes",
    "version": "0.0.0",
    "filename": "api/sadmin/qtytypes.js",
    "groupTitle": "_admin_qtytypes"
  },
  {
    "type": "get",
    "url": "/admin/getqtytype/:id",
    "title": "get particuler user details",
    "name": "findById",
    "group": "_admin_qtytypes",
    "version": "0.0.0",
    "filename": "api/sadmin/qtytypes.js",
    "groupTitle": "_admin_qtytypes"
  },
  {
    "type": "post",
    "url": "/admin/addqtytype/",
    "title": "add new Qty Types",
    "name": "insertQtyType",
    "group": "_admin_qtytypes",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "QtyType_Desc",
            "description": "<p>Mandatory QtyType_Desc.</p>"
          }
        ],
        "Login": [
          {
            "group": "Login",
            "type": "String",
            "optional": false,
            "field": "pass",
            "description": "<p>Only logged in users can post this. In generated documentation a separate &quot;Login&quot; Block will be generated.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/sadmin/qtytypes.js",
    "groupTitle": "_admin_qtytypes"
  },
  {
    "type": "post",
    "url": "/admin/editqtytypes/",
    "title": "update Qty Types details",
    "name": "updateQtyType",
    "group": "_admin_qtytypes",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "QtyType_id",
            "description": "<p>primary key to update particuler record.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "QtyType_Desc",
            "description": "<p>Mandatory QtyType_Desc.</p>"
          }
        ],
        "Login": [
          {
            "group": "Login",
            "type": "String",
            "optional": false,
            "field": "pass",
            "description": "<p>Only logged in users can post this. In generated documentation a separate &quot;Login&quot; Block will be generated.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/sadmin/qtytypes.js",
    "groupTitle": "_admin_qtytypes"
  },
  {
    "type": "get",
    "url": "/admin/deletesubCategory/:id",
    "title": "delete particuler sub category from database",
    "name": "deleteSubCategory",
    "group": "_admin_sub_category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "subcatg_id",
            "description": "<p>Sub Category id to delete particule record from primary key.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/sadmin/sub_category.js",
    "groupTitle": "_admin_sub_category"
  },
  {
    "type": "get",
    "url": "/admin/allsubcategory",
    "title": "generate list of categories",
    "name": "findAll",
    "group": "_admin_sub_category",
    "version": "0.0.0",
    "filename": "api/sadmin/sub_category.js",
    "groupTitle": "_admin_sub_category"
  },
  {
    "type": "get",
    "url": "/admin/getsubcategory/:id",
    "title": "get particuler category details",
    "name": "findById",
    "group": "_admin_sub_category",
    "version": "0.0.0",
    "filename": "api/sadmin/sub_category.js",
    "groupTitle": "_admin_sub_category"
  },
  {
    "type": "post",
    "url": "/admin/addsubcategory/",
    "title": "add new category",
    "name": "insertSubCategory",
    "group": "_admin_sub_category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "admin_id",
            "description": "<p>Loggedin admin user id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "catg_id",
            "description": "<p>Category id to update particule record from forgien key.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subcatg_name",
            "description": "<p>Mandatory Sub Category Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subcatg_description",
            "description": "<p>Mandatory sub category description.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subcatg_alias",
            "description": "<p>Mandatory sub category alias without space.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "vendor_id",
            "description": "<p>Loggedin users vendor id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "maincatg_id",
            "description": "<p>Main Category table forgien key.</p>"
          }
        ],
        "Login": [
          {
            "group": "Login",
            "type": "String",
            "optional": false,
            "field": "pass",
            "description": "<p>Only logged in users can post this. In generated documentation a separate &quot;Login&quot; Block will be generated.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/sadmin/sub_category.js",
    "groupTitle": "_admin_sub_category"
  },
  {
    "type": "post",
    "url": "/admin/editsubcategory/",
    "title": "update category details",
    "name": "updateSubCategory",
    "group": "_admin_sub_category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "admin_id",
            "description": "<p>Loggedin admin user id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "subcatg_id",
            "description": "<p>Sub Category id to update particule record from primary key.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "catg_id",
            "description": "<p>Category id to update particule record from foreign key.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subcatg_name",
            "description": "<p>Mandatory Sub Category Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subcatg_description",
            "description": "<p>Mandatory sub category description.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subcatg_alias",
            "description": "<p>Mandatory sub category alias without space.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "vendor_id",
            "description": "<p>Loggedin users vendor id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "maincatg_id",
            "description": "<p>Main Category table forgien key.</p>"
          }
        ],
        "Login": [
          {
            "group": "Login",
            "type": "String",
            "optional": false,
            "field": "pass",
            "description": "<p>Only logged in users can post this. In generated documentation a separate &quot;Login&quot; Block will be generated.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/sadmin/sub_category.js",
    "groupTitle": "_admin_sub_category"
  },
  {
    "type": "get",
    "url": "/admin/deleteTaxmaster/:id",
    "title": "delete particuler tax master from database",
    "name": "deleteTaxMaster",
    "group": "_admin_taxmaster",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "srno",
            "description": "<p>Tax master id to delete particular record from primary key.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/sadmin/tax_master.js",
    "groupTitle": "_admin_taxmaster"
  },
  {
    "type": "get",
    "url": "/admin/allTaxMaster",
    "title": "generate list of taxes master",
    "name": "findAll",
    "group": "_admin_taxmaster",
    "version": "0.0.0",
    "filename": "api/sadmin/tax_master.js",
    "groupTitle": "_admin_taxmaster"
  },
  {
    "type": "get",
    "url": "/admin/gettaxmaster/:id",
    "title": "get particuler tax details",
    "name": "findById",
    "group": "_admin_taxmaster",
    "version": "0.0.0",
    "filename": "api/sadmin/tax_master.js",
    "groupTitle": "_admin_taxmaster"
  },
  {
    "type": "post",
    "url": "/admin/addtaxmaster/",
    "title": "add new tax master",
    "name": "insertTaxMaster",
    "group": "_admin_taxmaster",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "TaxDesc",
            "description": "<p>Mandatory Tax Desc.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "TaxName",
            "description": "<p>Mandatory TaxName.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "TaxPerc",
            "description": "<p>Mandatory TaxPerc.</p>"
          }
        ],
        "Login": [
          {
            "group": "Login",
            "type": "String",
            "optional": false,
            "field": "pass",
            "description": "<p>Only logged in users can post this. In generated documentation a separate &quot;Login&quot; Block will be generated.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/sadmin/tax_master.js",
    "groupTitle": "_admin_taxmaster"
  },
  {
    "type": "post",
    "url": "/admin/editTaxMaster/",
    "title": "update tax master details",
    "name": "updateTaxMaster",
    "group": "_admin_taxmaster",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "TaxId",
            "description": "<p>Mandatory TaxId primary key of taxmasters.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "TaxDesc",
            "description": "<p>Mandatory vendor Tax Desc.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "TaxName",
            "description": "<p>Mandatory TaxName.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "TaxPerc",
            "description": "<p>Mandatory TaxPerc.</p>"
          }
        ],
        "Login": [
          {
            "group": "Login",
            "type": "String",
            "optional": false,
            "field": "pass",
            "description": "<p>Only logged in users can post this. In generated documentation a separate &quot;Login&quot; Block will be generated.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/sadmin/tax_master.js",
    "groupTitle": "_admin_taxmaster"
  },
  {
    "type": "get",
    "url": "/admin/deleteVendor/:id",
    "title": "delete particuler vendor from database",
    "name": "deleteVendor",
    "group": "_admin_vendors",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "vendor_id",
            "description": "<p>Vendor id to delete particule record from primary key.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/sadmin/vendors.js",
    "groupTitle": "_admin_vendors"
  },
  {
    "type": "get",
    "url": "/admin/allVendors",
    "title": "generate list of vendors",
    "name": "findAll",
    "group": "_admin_vendors",
    "version": "0.0.0",
    "filename": "api/sadmin/vendors.js",
    "groupTitle": "_admin_vendors"
  },
  {
    "type": "get",
    "url": "/admin/getvendor/:id",
    "title": "get particuler vendor details",
    "name": "findById",
    "group": "_admin_vendors",
    "version": "0.0.0",
    "filename": "api/sadmin/vendors.js",
    "groupTitle": "_admin_vendors"
  },
  {
    "type": "post",
    "url": "/admin/addvendor/",
    "title": "add new vendor",
    "name": "insertVendor",
    "group": "_admin_vendors",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "first_name",
            "description": "<p>Mandatory vendor first_name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "last_name",
            "description": "<p>Mandatory vendor last_name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email_id",
            "description": "<p>Mandatory vendor email_id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_type",
            "description": "<p>Mandatory user_type.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Mandatory password.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "company_name",
            "description": "<p>Mandatory company_name.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "mobile_number",
            "description": "<p>Mandatory mobile_number.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "country_id",
            "description": "<p>Mandatory vendor country_id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Mandatory vendor address.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "apartment",
            "description": "<p>Mandatory vendor apartment.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "city_id",
            "description": "<p>Mandatory city_id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "state_id",
            "description": "<p>Mandatory state_id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "zip",
            "description": "<p>Mandatory zip.</p>"
          }
        ],
        "Login": [
          {
            "group": "Login",
            "type": "String",
            "optional": false,
            "field": "pass",
            "description": "<p>Only logged in users can post this. In generated documentation a separate &quot;Login&quot; Block will be generated.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/sadmin/vendors.js",
    "groupTitle": "_admin_vendors"
  },
  {
    "type": "post",
    "url": "/admin/editvendor/",
    "title": "update vendor details",
    "name": "updateVendor",
    "group": "_admin_vendors",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "first_name",
            "description": "<p>Mandatory vendor first_name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "last_name",
            "description": "<p>Mandatory vendor last_name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email_id",
            "description": "<p>Mandatory vendor email_id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_type",
            "description": "<p>Mandatory user_type.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Mandatory password.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "company_name",
            "description": "<p>Mandatory company_name.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "mobile_number",
            "description": "<p>Mandatory mobile_number.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "country_id",
            "description": "<p>Mandatory vendor country_id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Mandatory vendor address.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "apartment",
            "description": "<p>Mandatory vendor apartment.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "city_id",
            "description": "<p>Mandatory city_id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "state_id",
            "description": "<p>Mandatory state_id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "zip",
            "description": "<p>Mandatory zip.</p>"
          }
        ],
        "Login": [
          {
            "group": "Login",
            "type": "String",
            "optional": false,
            "field": "pass",
            "description": "<p>Only logged in users can post this. In generated documentation a separate &quot;Login&quot; Block will be generated.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/sadmin/vendors.js",
    "groupTitle": "_admin_vendors"
  },
  {
    "type": "get",
    "url": "/deleteProductRating/:id",
    "title": "delete particuler product from database",
    "name": "deleteProductRating",
    "group": "product_rating",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "prate_id",
            "description": "<p>Product rating id to delete particule record from primary key.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/product_rating.js",
    "groupTitle": "product_rating"
  },
  {
    "type": "get",
    "url": "/getproductrating/:id",
    "title": "get particuler product details",
    "name": "findById",
    "group": "product_rating",
    "version": "0.0.0",
    "filename": "api/product_rating.js",
    "groupTitle": "product_rating"
  },
  {
    "type": "post",
    "url": "/addproductrating/",
    "title": "add new product rating",
    "name": "insertProductRating",
    "group": "product_rating",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "prate_date",
            "description": "<p>auto populated rating date.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user_id",
            "description": "<p>Mandatory user id foreign key.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "product_id",
            "description": "<p>Mandatory product id foreign key.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "vendor_id",
            "description": "<p>Mandatory vendor id foreign key.</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "ratings",
            "description": "<p>Mandatory ratings.</p>"
          }
        ],
        "Login": [
          {
            "group": "Login",
            "type": "String",
            "optional": false,
            "field": "pass",
            "description": "<p>Only logged in users can post this. In generated documentation a separate &quot;Login&quot; Block will be generated.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/product_rating.js",
    "groupTitle": "product_rating"
  },
  {
    "type": "post",
    "url": "/editproductrating/",
    "title": "update product rating details",
    "name": "updateProductRating",
    "group": "product_rating",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "prate_id",
            "description": "<p>primary key to update particuler record.</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "prate_date",
            "description": "<p>auto populated rating date.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user_id",
            "description": "<p>Mandatory user id foreign key.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "product_id",
            "description": "<p>Mandatory product id foreign key.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "vendor_id",
            "description": "<p>Mandatory vendor id foreign key.</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "ratings",
            "description": "<p>Mandatory ratings.</p>"
          }
        ],
        "Login": [
          {
            "group": "Login",
            "type": "String",
            "optional": false,
            "field": "pass",
            "description": "<p>Only logged in users can post this. In generated documentation a separate &quot;Login&quot; Block will be generated.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/product_rating.js",
    "groupTitle": "product_rating"
  },
  {
    "type": "get",
    "url": "/deleteuser/:id",
    "title": "delete particuler user from database",
    "name": "deleteUser",
    "group": "users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user_id",
            "description": "<p>User id to delete particule record from primary key.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/users.js",
    "groupTitle": "users"
  },
  {
    "type": "get",
    "url": "/allusers",
    "title": "generate list of users",
    "name": "findAll",
    "group": "users",
    "version": "0.0.0",
    "filename": "api/users.js",
    "groupTitle": "users"
  },
  {
    "type": "get",
    "url": "/getuser/:id",
    "title": "get particuler user details",
    "name": "findById",
    "group": "users",
    "version": "0.0.0",
    "filename": "api/users.js",
    "groupTitle": "users"
  },
  {
    "type": "post",
    "url": "/adduser/",
    "title": "add new user",
    "name": "insertUser",
    "group": "users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "first_name",
            "description": "<p>Mandatory first_name.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "last_name",
            "description": "<p>Mandatory last_name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email_id",
            "description": "<p>Mandatory email_id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_type",
            "description": "<p>Mandatory user_type.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Mandatory password.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "company_name",
            "description": "<p>optional company_name</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "mobile_number",
            "description": "<p>Mandatory mobile_number.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "country_id",
            "description": "<p>Mandatory country.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "address",
            "description": "<p>Mandatory address.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "apartment",
            "description": "<p>Mandatory apartment.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "city_id",
            "description": "<p>Mandatory city.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "state_id",
            "description": "<p>Mandatory state.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "zip",
            "description": "<p>Optional zip code.</p>"
          }
        ],
        "Login": [
          {
            "group": "Login",
            "type": "String",
            "optional": false,
            "field": "pass",
            "description": "<p>Only logged in users can post this. In generated documentation a separate &quot;Login&quot; Block will be generated.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/users.js",
    "groupTitle": "users"
  },
  {
    "type": "post",
    "url": "/editUser/",
    "title": "update category details",
    "name": "updateUser",
    "group": "users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user_id",
            "description": "<p>Mandatory user id (primary key) to update user details .</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "first_name",
            "description": "<p>Mandatory first_name.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "last_name",
            "description": "<p>Mandatory last_name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email_id",
            "description": "<p>Mandatory email_id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_type",
            "description": "<p>Mandatory user_type.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Mandatory password.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "company_name",
            "description": "<p>optional company_name</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "mobile_number",
            "description": "<p>Mandatory mobile_number.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "country_id",
            "description": "<p>Mandatory country.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "address",
            "description": "<p>Mandatory address.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "apartment",
            "description": "<p>Mandatory apartment.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "city_id",
            "description": "<p>Mandatory city.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "state_id",
            "description": "<p>Mandatory state.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "zip",
            "description": "<p>Optional zip code.</p>"
          }
        ],
        "Login": [
          {
            "group": "Login",
            "type": "String",
            "optional": false,
            "field": "pass",
            "description": "<p>Only logged in users can post this. In generated documentation a separate &quot;Login&quot; Block will be generated.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/users.js",
    "groupTitle": "users"
  }
] });

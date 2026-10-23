
import {v2 as cloudinary} from 'cloudinary'
import product_model from '../models/product_Model.js'
// function for add product
const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      nameFa,
      descriptionFa,
      price,
      category,
      subCategory,
      sizes,
      bestSeller,
    } = req.body;

    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];
    const image3 = req.files.image3 && req.files.image3[0];
    const image4 = req.files.image4 && req.files.image4[0];

    const images = [image1, image2, image3, image4].filter((item)=> item !== undefined)

    let imagesUrl = await Promise.all(
        images.map(async(item)=>{
            let result = await cloudinary.uploader.upload(item.path , {resource_type:'image'})
            return result.secure_url
        })
    )

    const productData = {
        name , 
        description ,
        nameFa: typeof nameFa === 'string' ? nameFa.trim() : '',
        descriptionFa: typeof descriptionFa === 'string' ? descriptionFa.trim() : '',
        category , 
        price:Number(price) ,
        subCategory , 
        bestSeller:bestSeller ==="true" ? true: false ,
        sizes:JSON.parse(sizes) ,
        image: imagesUrl ,
        date:Date.now()
    }

    console.log(productData);

    const product = new product_model(productData)
    await product.save()

    res.json({success:true , message:"Product Added"});


  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// function for list product
const listProduct = async (req, res) => {

    try {
        const products = await product_model.find({});
        res.json({success:true , products})
    } catch (error) {
        console.log(error);
       res.json({ success: false, message: error.message });
    
    }
};

// function for remove product
const removeProduct = async (req, res) => {
    try {
        await product_model.findByIdAndDelete(req.body.id)
        res.json({success:true , message:"product remove"})
    } catch (error) {
        console.log(error);
       res.json({ success: false, message: error.message });
    }
};

// function for single product info
const singleProduct = async (req, res) => {
    try {
        const {productId} = req.body
        const product = await product_model.findById(productId)
        res.json({success:true , product})
    } 
    catch (error) {
        console.log(error);
       res.json({ success: false, message: error.message });
    }
};

export { listProduct, addProduct, removeProduct, singleProduct };

import React, { useState } from "react";
import { Alert, Col, Container, Form, Row, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import '../Style/Owner.css'

function Owner() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [images, setImages] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);

    const [imgToRemove, setImgToRemove] = useState(null);
      const navigate = useNavigate();
     const [createProduct, { isError, error, isLoading, isSuccess }] =useState("");

    function handleRemoveImg(imgObj) {
        setImgToRemove(imgObj.public_id);
        axios
            .delete(`/images/${imgObj.public_id}/`)
            .then((res) => {
                setImgToRemove(null);
                setImages((prev) => prev.filter((img) => img.public_id !== imgObj.public_id));
            })
            .catch((e) => console.log(e));
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (!name || !description || !price || !category || !images.length) {
            return alert("Please fill out all the fields");
        }
        createProduct({ name, description, price, category, images }).then(({ data }) => {
            if (data.length > 0) {
                setTimeout(() => {
                     navigate("/");
                }, 1500);
            }
        });
    }

    const handleImageChange = (event) => {
      const file = event.target.files[0];
  
      if (file) {
        const reader = new FileReader();
  
        reader.onload = (e) => {
          setSelectedImage(e.target.result);
        };
  
        reader.readAsDataURL(file);
      }
    };
  


    return (
        <>
        <Container>
            <Row>
                <Col md={6} className="new-product__form--container">
                    <Form style={{ width: "100%" }} onSubmit={handleSubmit}>
                        <h1 className="mt-4" id="cr">Upload your room details </h1>
                         {isSuccess && <Alert variant="success">Product created with succcess</Alert>} 
                         {isError && <Alert variant="danger">{error.data}</Alert>} 
                        <Form.Group className="mb-3">
                            <Form.Label>Room type</Form.Label>
                            <Form.Control type="text" placeholder="Enter Room type" value={name} required onChange={(e) => setName(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label> description</Form.Label>
                            <Form.Control as="textarea" placeholder=" description" style={{ height: "100px" }} value={description} required onChange={(e) => setDescription(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Rent(RS)</Form.Label>
                            <Form.Control type="number" placeholder="Rent ($)" value={price} required onChange={(e) => setPrice(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" onChange={(e) => setCategory(e.target.value)}>
                            <Form.Label>Category</Form.Label>
                            <Form.Select>
                                <option disabled selected>
                                    -- Select One --
                                </option>
                                <option value="1BHK">1BHK</option>
                                <option value="2BHK">2BHK</option>
                                <option value="3BHK">3BHK</option>
                                <option value="4BHLK">4BHK</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3">
{/*                             <Button type="button" onClick={handleImageChange}>
                                
                                Upload Images
                            </Button>
                            
 */}                  <input type="file" accept="image/*" onChange={handleImageChange} />
 {console.log(selectedImage)}


 
                 <div className="images-preview-container">
                                {images.map((image) => (
                                    <div className="image-preview">
                                        <img src={image.url} />
                                        {imgToRemove != image.public_id && <i className="fa fa-times-circle" onClick={() => handleRemoveImg(image)}></i>}
                                    </div>
                                ))}
                            </div>
                        </Form.Group>

                        <Form.Group>
                            <Button type="submit" d>
                                Launch Home
                            </Button>
                        </Form.Group>
                    </Form>
                </Col>
                <Col md={6} className="new-product__image--container"></Col>
            </Row>
        </Container>
        </>
    );
}

export default Owner;
 

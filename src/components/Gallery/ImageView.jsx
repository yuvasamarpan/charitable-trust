import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ImageView.css';

export default function ImageView() {
    const { albumId, imageId } = useParams();
    const navigate = useNavigate();

    // For demonstration purposes, statically import all album images
    const allImages = {
        sankatmochan2024: [
            require('../../assets/album1/1.jpg'),
            require('../../assets/album1/2.jpg'),
            require('../../assets/album1/3.jpg'),
        ],
        republicday2023: [
            require('../../assets/album2/1.jpg'),
            require('../../assets/album2/2.jpg'),
            require('../../assets/album2/3.jpg'),
        ],
        // Add more albums here...
    };

    const imageList = allImages[albumId] || [];
    const imgSrc = imageList[parseInt(imageId)];

    if (!imgSrc) {
        return <div className="image-view-container">Image not found</div>;
    }

    return (
        <div className="image-view-container">
            <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>
            <img src={imgSrc} alt={`Image ${imageId}`} className="full-image" />
        </div>
    );
}
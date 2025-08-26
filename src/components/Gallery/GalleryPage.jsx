import React from 'react';
import { useNavigate } from 'react-router-dom';
import galleryAlbums from './galleryData';
import './GalleryPage.css';

export default function GalleryPage() {
    const navigate = useNavigate();

    return (
        <div className="gallery-page">
            <h1 className="gallery-heading">Gallery</h1>
            <div className="album-grid">
                {galleryAlbums.map((album) => (
                    <div
                        className="album-card"
                        key={album.id}
                        onClick={() => navigate(`/gallery/${album.id}`)}
                    >
                        <img
                            src={require(`../../assets/${album.cover}`)}
                            alt={album.title}
                            className="album-cover"
                        />
                        <div className="album-info">
                            <h3>{album.title}</h3>
                            <p>{album.year}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
import React, { Component } from 'react';
import axios from 'axios';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Loader from '../Loader/Loader';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import '../../styles.css';

const API_KEY = '35143561-a246dd3ff16ac48132d2e40aa';

class ImageGallery extends Component {
  state = {
    images: [],
    isLoading: false,
    selectedImage: null,
    currentPage: 1,
    showModal: false,
    showNoImagesMessage: false,
  };

  // componentDidUpdate(prevProps) {
  //   if (this.props.imgName !== prevProps.imgName) {
  //     this.setState({ images: [], currentPage: 1 }, () => {
  //       this.fetchImages(this.props.imgName, 1);
  //     });
  //   }
  // }
  componentDidUpdate(prevProps) {
    if (this.props.imgName !== prevProps.imgName) {
      this.setState(
        { images: [], currentPage: 1, showNoImagesMessage: false },
        () => {
          this.fetchImages(this.props.imgName, 1);
        }
      );
    }
  }

  fetchImages = (query, page) => {
    this.setState({ isLoading: true });

    axios
      .get(
        `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      )
      .then(response => {
        this.setState(prevState => ({
          images: [...prevState.images, ...response.data.hits],
          currentPage: page,
          showNoImagesMessage: response.data.hits.length === 0,
        }));
      })
      .catch(error => console.log(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  handleLoadMore = () => {
    const { imgName, currentPage } = this.props;
    const nextPage = currentPage + 1;
    this.fetchImages(imgName, nextPage);
  };

  openModal = selectedImage => {
    this.setState({ showModal: true, selectedImage });
  };

  closeModal = () => {
    this.setState({ showModal: false, largeImageURL: '' });
  };

  render() {
    const { images, isLoading, showModal, selectedImage, showNoImagesMessage } =
      this.state;

    return (
      <>
        <ul className="ImageGallery">
          {images.map(({ id, webformatURL, largeImageURL }) => (
            <ImageGalleryItem
              key={id}
              webformatURL={webformatURL}
              onClick={() => this.openModal(largeImageURL)}
            />
          ))}
        </ul>
        {isLoading && <Loader />}

        {images.length > 0 && !isLoading && (
          <Button onClick={this.handleLoadMore} />
        )}
        {showModal && (
          <Modal largeImageURL={selectedImage} onClose={this.closeModal} />
        )}
        {showNoImagesMessage && images.length === 0 && !isLoading && (
          <p>No matching images found.</p>
        )}
      </>
    );
  }
}

export default ImageGallery;

import '../styles.css';
import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import axios from 'axios';

const API_KEY = '35143561-a246dd3ff16ac48132d2e40aa';

class App extends Component {
  state = {
    images: [],
    currentPage: 1,
    searchQuery: '',
    isLoading: false,
    showModal: false,
    largeImage: '',
    error: null,
    selectedImage: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.getImages();
    }
  }

  onChangeQuery = query => {
    this.setState({
      images: [],
      currentPage: 1,
      searchQuery: query,
      error: null,
    });
  };

  getImages = async () => {
    const { currentPage, searchQuery } = this.state;

    this.setState({
      isLoading: true,
    });

    try {
      const response = await axios.get(
        `https://pixabay.com/api/?q=${searchQuery}&page=${currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      );

      const { hits } = response.data;

      this.setState(prevState => ({
        images: [...prevState.images, ...hits],
        currentPage: prevState.currentPage + 1,
      }));

      if (currentPage !== 1) {
        this.scrollOnLoadButton();
      }
    } catch (error) {
      console.log('Something went wrong with fetching images:', error);
      this.setState({ error });
    } finally {
      this.setState({
        isLoading: false,
      });
    }
  };

  handleGalleryItem = fullImageUrl => {
    this.setState({
      largeImage: fullImageUrl,
      showModal: true,
    });
  };

  openModal = selectedImage => {
    this.setState({ showModal: true, selectedImage });
  };

  closeModal = () => {
    this.setState({ showModal: false, largeImage: '' });
  };

  scrollOnLoadButton = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  render() {
    const { images, isLoading, showModal, largeImage, error } = this.state;
    const needToShowLoadMore = images.length > 0 && images.length >= 12;

    return (
      <div className="App">
        <Searchbar onSearch={this.onChangeQuery} />

        {images.length < 1 && (
          <div>
            <h2>The gallery is empty</h2>
          </div>
        )}

        <ImageGallery images={images} onImageClick={this.handleGalleryItem} />

        {needToShowLoadMore && <Button onClick={this.getImages} />}
        {showModal && (
          <Modal largeImageURL={largeImage} onClose={this.closeModal} />
        )}

        {isLoading && <Loader />}

        {error && (
          <div>
            <h2>Oops!</h2>
            <p>
              Sorry, something went wrong. Please try again, or{' '}
              <a href="/">refresh the page</a>.
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default App;

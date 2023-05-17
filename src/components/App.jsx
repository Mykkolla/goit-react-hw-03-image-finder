import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import '../styles.css';
// import { Layout } from './Style/Layout';

// export class App extends Component {
//   state = {
//     imgName: '',
//   };

//   handleFormSubmit = imgName => {
//     this.setState({ imgName });
//   };

//   handleLoadMore = () => {
//     this.setState(
//       prevState => ({ page: prevState.page + 1 }),
//       () => {
//         this.fetchImages(this.props.imgName);
//       }
//     );
//   };

//   handleImageClick = image => {
//     this.props.onImageClick(image);
//   };
//   render() {
//     return (
//       <>
//         <Searchbar onSubmit={this.handleFormSubmit} />
//         <ImageGallery imgName={this.state.imgName} />
//         {isLoading && <Loader />}
//         {images.length > 0 && !isLoading && (
//           <Button onLoadMore={this.handleLoadMore} />
//         )}
//         {selectedImage && (
//           <Modal image={selectedImage} onClose={this.handleCloseModal} />
//         )}
//       </>
//     );
//   }
// }
export class App extends Component {
  state = {
    imgName: '',
  };

  handleSearchSubmit = query => {
    this.setState({ imgName: query });
  };

  render() {
    const { imgName } = this.state;

    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSearchSubmit} />
        <ImageGallery imgName={imgName} />
      </div>
    );
  }
}

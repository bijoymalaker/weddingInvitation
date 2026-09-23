<template>
  <div class="gallery-container">
    <div class="gallery">
      <div v-for="(image, id) in images"
           :key="id"
           class="gallery__image-wrapper"
           @click="selectImage(id)">
        <img class="gallery__image"
             :src="image.url"
             :alt="image.alt"
             :title="image.title"/>
      </div>
    </div>
  </div>
</template>

<script>
import img1 from '../assets/gallery/amazing-look-traditional-ritual-with-fire.jpg';
import img2 from '../assets/gallery/hands-indian-bride-groom-intertwined-together-making-authentic-wedding-ritual.jpg';
import img3 from '../assets/gallery/indian-bride-groom-s-hands-traditional-wedding-ceremony.jpg';
import img4 from '../assets/gallery/indian-tradition-putting-wedding-bangles.jpg';
import img5 from '../assets/gallery/wedding-ritual-putting-ring-finger-india.jpg';

const IMAGES = [
  img2,
  img3,
  img4,
  img5,
  img1, // Duplicate the first one to make 6 images for the grid layout
];
  
  const WRAPPER_SELECTOR = 'gallery__image-wrapper';
  const CURRENT_WRAPPER = `${ WRAPPER_SELECTOR }--selected`;
  const TRANSITION_DURATION = 620;
  const EASY_FN = 'cubic-bezier(0.65, 0, 0.35, 1)';
  const DEFAULT_TRANSFORM = 'scale(1) translate3d(0, 0, 1px)';

  export default {
    mounted() {
      // Use querySelectorAll to safely get only elements, avoiding text nodes
      this.wrapperElements = Array.from(this.$el.querySelectorAll('.gallery__image-wrapper'));
      
      this.selectImage(0);
      setTimeout(() => {
        this.selectImage(IMAGES.length - 1);
      }, 1000);
    },
    data() {
      return {
        images: IMAGES.map((url, id) => ({
          id,
          url,
          alt: `alt-${ id }`,
          title: `title-${ id }`
        })),
        selectedImageId: undefined
      };
    },
    methods: {
      selectImage(id) {
        this.selectedImageId = id;
        
        // Refresh the elements list to be safe
        this.wrapperElements = Array.from(this.$el.querySelectorAll('.gallery__image-wrapper'));
        const currentElement = this.wrapperElements[id];
        
        if (!currentElement) return;
        
        // We're going to reverse the process.
        // Firstly, apply classes to let the browser calculate a new state.
        // Secondly, calculate the difference between the previous and the current states.
        // Thirdly, apply the inverted transformation to an element (so it'll look exactly like in the start).
        // Then fourthly, reset the transformation on a next tick (to let the browser notice the changes).
        
        // Get the elements rects
        const prevRects = this.wrapperElements.map(
          (child) => child.getBoundingClientRect()
        );
        
        // Remove "selected" class, transitions and transforms from every element
        this.wrapperElements.forEach((child, i) => {
          child.style.transition = 'none';
          child.style.transform = DEFAULT_TRANSFORM;
            
          child.classList.remove(CURRENT_WRAPPER);
        });
        
        // Set the current element as selected
        currentElement.classList.add(CURRENT_WRAPPER);
        
        this.wrapperElements.forEach((child, i) =>  {
          const prevRect = prevRects[i];
          const newRect = child.getBoundingClientRect();
         
          // Calculate the difference between the element states
          const scale = prevRect.width / newRect.width;
          const x = (prevRect.x - newRect.x) * 1 / scale;
          const y = (prevRect.y - newRect.y) * 1 / scale;
          
          // Apply the calculated transfomation
          child.style.transform = `
            scale(${ scale })
            translate3d(${ x }px, ${ y }px, 1px)
          `;
          
          // Reset the transformation on a next tick
          setTimeout(() => {
            child.style.transition = `all ${ TRANSITION_DURATION }ms ${ EASY_FN }`;
            child.style.transform = DEFAULT_TRANSFORM;
          }, 0);
        });
      }
    }
  };
</script>

<style lang="scss" scoped>
  $images-amount: 6;
  $color-background: #1f1300;
  $color-highlight: #ffc15e;
  $color-border-a: #f7b05b;
  $color-border-b: #f7934c;
  
  .gallery-container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2em 1em;
  }
  
  .gallery {
    position: relative;
    width: 100vmin;
    display: grid;
    grid-template-rows: repeat(4, 1fr);
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 0.5em;
    padding: 0.5em;
    overflow: hidden;
    background: #1a1000; /* Darkened by 5% from #1f1300 */
    box-shadow: 
      0 0 0 2px $color-highlight,
      5px 3px 0 2px rgba($color-border-a, 0.16),
      10px 6px 1px 2px rgba($color-border-b, 0.16),
      0 0 8px 2px rgba($color-highlight, 0.5);
    
    &__image-wrapper {
      position: relative;
      cursor: pointer;
      padding-top: 75%;
      width: 100%;
      height: 0;
      transform-origin: 0 0;
      overflow: hidden;
      grid-row: span 2;
      grid-column: span 2;
      box-sizing: content-box;
      backface-visibility: hidden;
      perspective: 1px;
      transform: translate3d(0, 0, 1px);
      
      &::before,
      &::after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
      
      &::after {
        background: #000;
        opacity: 0.33;
        z-index: 1;
        transform: translate(0, 0);
        transition: all 500ms ease-out;
        box-shadow: 0 0 32px 1px #000;
      }
      
      &::before {
        opacity: 0;
        z-index: 2;
        background: #ffd080; /* Lightened by 10% from #ffc15e */
        transition: all 160ms ease-in;
        mix-blend-mode: hard-light;
      }
      
      &:hover:not(.gallery__image-wrapper--selected) {
        &::before {
          opacity: 0.32;
        }
      }
            
      @for $i from 1 through $images-amount {
        &:nth-child(#{ $i }) {
          order: #{ $i * 2 };
        }
      }
    }
    
    &__image {
      position: absolute;
      top: 50%;
      left: 50%;
      height: 100%;
      width: auto;
      transform: translate(-50%, -50%);
      
      transition: all 320ms ease;
    }
  }
  
  .gallery__image-wrapper.gallery__image-wrapper--selected {
    grid-row: span 4;
    grid-column: span 4;
    z-index: 1;

    &:nth-child(odd) {
      &::after {
        transform: translate(0, 100%);
      }
    }

    &:nth-child(even) {
      &::after {
        transform: translate(100%, 0);
      }
    }

    &:nth-child(3) {
      order: 3;
    }

    &:nth-child(6) {
      order: 9;
    }
  }
</style>

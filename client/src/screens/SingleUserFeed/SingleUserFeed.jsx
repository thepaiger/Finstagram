// Packages
import { Link } from 'react-router-dom';

// Graphics
import addIcon from './../../assets/graphics/add-icon.svg'

// Components
import ImageFeed from '../../components/ImageFeed/ImageFeed';

export default function SingleUserFeed({ posts }) {
  return (
    <div>
      <header>
        <h1>Finstagram</h1>
        <Link to='/create-post'><img src={addIcon} alt='create post icon' /></Link>
      </header>

      <ImageFeed posts={posts} />
    </div>
  )
}

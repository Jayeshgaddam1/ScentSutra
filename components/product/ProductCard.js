import Link from 'next/link';
import Image from 'next/image';
import { FiShoppingBag } from 'react-icons/fi';

export default function ProductCard({ product }) {
  // Format price in Indian Rupees
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  // Placeholder image for development
  const imageSrc = product.images && product.images[0] 
    ? product.images[0]
    : 'https://via.placeholder.com/300x300.png?text=ScentSutra';

  return (
    <div className="card group">
      <div className="relative overflow-hidden">
        {/* Product image */}
        <Link href={`/products/${product.id}`}>
          <div className="aspect-square relative overflow-hidden bg-gray-100">
            <Image
              src={imageSrc}
              alt={product.name}
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </Link>

        {/* Sale or New badge */}
        {product.salePrice && (
          <div className="absolute top-2 left-2 bg-accent text-primary text-xs font-bold px-2 py-1 rounded">
            SALE
          </div>
        )}
        {product.isNew && !product.salePrice && (
          <div className="absolute top-2 left-2 bg-primary text-secondary text-xs font-bold px-2 py-1 rounded">
            NEW
          </div>
        )}

        {/* Quick add to cart button */}
        <button 
          className="absolute bottom-0 left-0 right-0 bg-primary text-secondary py-2 flex items-center justify-center opacity-0 translate-y-full transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0"
          aria-label={`Add ${product.name} to cart`}
        >
          <FiShoppingBag className="mr-2" />
          <span>Quick Add</span>
        </button>
      </div>

      {/* Product details */}
      <div className="p-4">
        <Link href={`/products/${product.id}`} className="block">
          <h3 className="font-playfair font-semibold text-lg mb-1">{product.name}</h3>
        </Link>
        <p className="text-sm text-gray-600 mb-2">Dupe of {product.dupeOf}</p>
        
        <div className="flex items-center">
          {product.salePrice ? (
            <>
              <span className="font-medium text-primary">{formatPrice(product.salePrice)}</span>
              <span className="ml-2 text-sm text-gray-500 line-through">{formatPrice(product.price)}</span>
            </>
          ) : (
            <span className="font-medium text-primary">{formatPrice(product.price)}</span>
          )}
        </div>
      </div>
    </div>
  );
}
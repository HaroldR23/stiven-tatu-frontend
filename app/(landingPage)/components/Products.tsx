import { motion } from 'motion/react';
import { ShoppingCart } from 'lucide-react';
import { productsContent } from '@/app/constants';
import { ProductsProps } from '@/app/models';
import Image from 'next/image';

const Products = ({ language }: ProductsProps) => {
  return (
    <section id="products" className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 
            className="text-4xl sm:text-5xl md:text-6xl mb-6"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            {productsContent[language].title}
          </h2>
          <div className="w-24 h-0.5 bg-accent mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {productsContent[language].products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card border border-white/5 overflow-hidden group"
            >
              <div className="aspect-square overflow-hidden bg-secondary">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl mb-2">{product.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-accent text-xl">{product.price}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products; 

interface ProductSpec {
  description: string;
  price: string;
  time: string;
  warranty: string;
  details: string;
}

export interface TabData {
  title: string;
  items: ProductSpec[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ProductFAQProps {
  questions: FAQItem[];
}

export interface ProductCarouselProps {
  productImages: string[];
}

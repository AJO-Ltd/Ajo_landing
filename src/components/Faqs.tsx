import { Container } from '@/components/Container'

const faqs = [
  [
    {
      question: 'What is AJO? ',
      answer:
        'Ajo is a centralized platform for university students to get all their needs. From sharing pictures and interacting, to purchasing and selling products online.',
    },
    {
      question: 'What are AJO tokens?',
      answer:
        'These are tokens earned from users interacting with your brand-related posts. These tokens can be used to get discounts/rewards from the tagged brands.',
    },
    {
      question: 'Can I pay for products on AJO?',
      answer:
        'Yes, you can purchase products directly on the platform using your wallet. When you create an account on AJO, you get assigned a wallet, that wallet can then be used to make purchases.',
    },
  ],
  [
    {
      question: 'How can I top up my wallet?',
      answer:
        'You can top up your wallet through peer-to-peer transfers, or visit Christex foundation at FBC to topup your wallet.',
    },
    {
      question: 'How can I get my products after purchasing?',
      answer:
        'Products can be collected at hotspot locations, or via delivery by brand owners.',
    },
    {
      question: 'Can anyone create a brand?',
      answer:
        'Yes, any student can create a brand. However, student brands can get verified after going through the verification process.',
    },
  ],
  [
    {
      question: 'How do I earn AJO tokens?',
      answer:
        'When you purchase a product from a brand, post a photo of you using the product or of the product, the number of likes you get, determine the number of Ajo tokens you receive from that post.',
    },
    {
      question: 'Can I withdraw AJO tokens for cash?',
      answer:
        'No, AJO tokens can only be used to get discounts and rewards from brands.',
    },
    {
      question: 'Do I have to pay to create a brand?',
      answer:
        "No, you don't have to pay to create a brand. Creating a brand is free.",
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="border-t border-gray-200 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faqs-title"
            className="text-3xl font-medium tracking-tight text-gray-900"
          >
            Frequently asked questions
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            If you have anything else you want to ask,{' '}
            <a
              href="#"
              className="text-gray-900 underline"
            >
              reach out to us
            </a>
            .
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="space-y-10">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="text-lg font-semibold leading-6 text-gray-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-gray-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}

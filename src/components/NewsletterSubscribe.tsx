import MailchimpSubscribe from 'react-mailchimp-subscribe'
import NewsletterForm from './NewsletterForm'

const NewsletterSubscribe = () => {
  const MAILCHIMP_URL = process.env.NEXT_PUBLIC_MAILCHIMP_URL

  return (
    <MailchimpSubscribe
      url="https://gmail.us21.list-manage.com/subscribe/post?u=70997f5186117f17b86b02a23&amp;id=445c74c281&amp;f_id=00cae9e6f0"
      render={(props: any) => {
        const { subscribe, status, message } = props || {}
        return (
          <NewsletterForm
            status={status}
            message={message}
            onValidated={(formData: any) => subscribe(formData)}
          />
        )
      }}
    />
  )
}

export default NewsletterSubscribe

import { toast } from "react-toastify";

export const texts = {
  english: {
    heroSection: {
      title: "Web Solutions",
      subtitle: "By Philippe Charpentier",
      marvin:
        "Talk to Marvin, my AI assistant, who will gladly discuss your projects with you.",
      credits: "Background image by Markus Spiske",
    },
    chatbotSection: {
      title: "Meet Marvin",
      description:
        "Marvin is my playful AI Assistant. He will be happy to answer your questions and guide you through the services I provide.",
      starter:
        "Hello, I am Marvin, Philippe's AI assistant. How can I help you today?",
      input: "Type your message here...",
      send: "Send",
    },
    servicesSection: {
      title: "A service tailored to your needs",
      services: [
        {
          title: "Business brochure websites",
          description:
            "Fast and secure websites using the latest technologies. Responsive design ensures your website looks great on all devices.",
        },
        {
          title: "Complex web applications",
          description:
            "Scalable and secure web applications using the latest and most relevant technologies. Responsive design ensures your application looks great on all devices, with option to build a mobile application.",
        },
        {
          title: "E-commerce solutions",
          description:
            "Fast and secure e-commerce solutions using the most relevant technologies. Responsive design ensures your website looks great on all devices.",
        },
        {
          title: "Artificial intelligence integration",
          description:
            "I can integrate artificial intelligence into your web application to provide intelligent recommendations to your users. I can also develop chatbots that can interact with your users to provide support and answer questions.",
        },
      ],
    },
    projectSection: {
      title: "Featured projects",
      link: "Visit Project",
      retry: "Retry",
      error:
        "Featured projects are not available at the moment, please try later.",
    },
    footer: {
      title:
        "Seamless and transparent process from initial contact to final delivery",
      description:
        "Use the contact form to provide a description of your project and your budget. I will assess the feasibility of the project and provide you with a quote, a timeline, and payment terms. Upon agreement, I will start the project. For specific design needs, you can provide me with your Figma prototypes, but I can also select and supervise a professional web designer. A status update will be communicated to you regularly. Once the project is completed, validated, and deployed, a supervision period can be offered to ensure the proper functioning of the project",
      email: "Email",
      subject: "Subject",
      message: "Message",
      send: "Send",
      toast: {
        success: "Email sent successfully",
        error: "Failed to submit the form. Please try again later.",
      },
    },
  },

  french: {
    heroSection: {
      title: "Solutions Web",
      subtitle: "Par Philippe Charpentier",
      marvin:
        "Marvin, mon assitant boosté à l'intelligence artificielle, se fera un plaisir de discuter de vos projets avec vous.",
      credits: "Image d'arrière-plan par Markus Spiske",
    },
    chatbotSection: {
      title: "Je vous présente Marvin",
      description:
        "Marvin est mon sympatique assistant doué d'intelligence artificielle. Il se fera un plaisir de répondre à vos questions.",
      starter:
        "Bonjour, je suis Marvin. Comment puis-je vous aider aujourd'hui?",
      input: "Tapez votre message ici...",
      send: "Envoyer",
    },
    servicesSection: {
      title: "Un service adapté à vos besoins",
      services: [
        {
          title: "Vitrines",
          description:
            "Sites Web simples, performants et sécurisés pour présenter vos services à vos prospects sur toutes les tailles d'écran.",
        },
        {
          title: "Applications Web et Mobiles",
          description:
            "Applications Web et Mobiles plus complexes, évolutives et sécurisées utilisant les technologies les plus récentes.",
        },
        {
          title: "Commerce électronique",
          description:
            "Boutiques en ligne fiables et sécurisées utilisant les toutes dernières technologies et adaptées à tous les écrans.",
        },
        {
          title: "Intelligence artificielle",
          description:
            "Intégration de fonctions d'intelligence artificielle dans votre projet afin par exemple d'intéragir avec vos utilisateurs. Votre imagination et vos besoins sont les seules limites.",
        },
      ],
    },
    projectSection: {
      title: "Quleques exemples de réalisations",
      link: "Accès au projet",
      retry: "Réessayer",
      error:
        "Projets non disponibles pour le moment, veuillez réessayer plus tard.",
    },
    footer: {
      title:
        "Processus simple et transparent du premier contact jusqu'à la livraison finale",
      description:
        "Utilisez le formulaire de contact pour fournir une description de votre projet et de votre budget. J'évaluerai la faisabilité du projet et vous fournirai un devis, un délai et des modalités de paiement. En cas d'accord, je commencerai le projet. Pour des besoins spécifiques de design, vous pourrez me fournir vos maquettes Figma mais je peux également sélectionner et superviser un designer Web professionnel. Un point de situation vous sera communiqué de façon régulière. Une fois le projet terminé, validé et déployé, une période de suivi pourra vous être proposée pour veiller au bon fonctionnement du projet.",
      email: "Email",
      subject: "Sujet",
      message: "Message",
      send: "Envoyer",
      toast: {
        success: "Email envoyé avec succès",
        error: "Échec de l'envoi de l'email. Essayez à nouveau plus tard.",
      },
    },
  },
};

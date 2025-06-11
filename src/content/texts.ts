
// Configuration centralisée de tous les textes du site
export const texts = {
  // Page d'accueil
  home: {
    title: "Portfolio",
    subtitle: {
      intro: "Photographe passionnée, je capture l'instant avec l'envie de transmettre une émotion, une ambiance ou simplement la beauté d'un moment.",
      description: "Peu importe le sujet – concert, voyage, événement sportif ou paysage – tout devient plus vivant quand j'ai un projet photo en tête. Ce portfolio est à la fois mon terrain d'exploration et mon carnet de route. Bienvenue dans mon univers."
    },
    recentWork: {
      title: "Travaux récents",
      buttonText: "Voir toutes les galeries"
    },
    callToAction: {
      title: "Travaillons ensemble",
      subtitle: "Vous avez un projet ? Une idée ? N'hésitez pas à me contacter.",
      buttonText: "Me contacter"
    }
  },

  // Page galerie
  gallery: {
    title: "Galeries",
    subtitle: "Une sélection de mes travaux organisés par année",
    collectionPrefix: "Collection"
  },

  // Page contact
  contact: {
    title: "Contact",
    subtitle: "Discutons de votre projet ensemble",
    intro: {
      title: "Restons en contact",
      description: "Vous avez un projet photo en tête ? Que ce soit pour un événement, un portrait, ou simplement pour discuter d'une collaboration, n'hésitez pas à me contacter."
    },
    info: {
      email: {
        label: "Email",
        value: "contact@photographe.fr"
      },
      phone: {
        label: "Téléphone",
        value: "+33 6 12 34 56 78"
      },
      location: {
        label: "Localisation",
        value: "France"
      }
    },
    form: {
      title: "Envoyez-moi un message",
      fields: {
        name: {
          label: "Nom",
          placeholder: "Votre nom"
        },
        email: {
          label: "Email",
          placeholder: "votre@email.com"
        },
        subject: {
          label: "Sujet",
          placeholder: "Sujet de votre message"
        },
        message: {
          label: "Message",
          placeholder: "Décrivez votre projet..."
        }
      },
      submitButton: "Envoyer le message",
      successMessage: {
        title: "Message envoyé !",
        description: "Je vous répondrai dans les plus brefs délais."
      }
    }
  }
};

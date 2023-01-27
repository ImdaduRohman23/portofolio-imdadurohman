export const titleVariant = {
    hidden: {
        opacity: 0,
        x: '-100%'
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            delay: .3,
            duration: 1,
            ease: 'easeOut',
        }
    }
};

export const subTitleVariant = {
    hidden: {
        opacity: 0,
        x: '100%'
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            delay: .3,
            duration: 1,
            ease: 'easeOut',
        }
    }
};

export const contentVariant = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            delay: 1.3,
            duration: 1
        }
    },
};

export const portoVariant = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            delay: 1,
            duration: 1.2
        }
    }
}
// zmienne globalne, funcke jak w csss, helpery

export const theme = {
    colors: {
        backgroundColor: '#2d3d4b',
        fontColor: '#f3f3ff',
        listsFontColor: '#f3f3ff',

        resultListBackgroundColor: '#fff',
        resultListBackgroundColorHover: '#2d3d4b',

        resultListFontColor: '#2d3d4b',
        resultListFontColorHover: '#fff',

        selectedListItemBackgroundColor: '#2d3d4b',

        inputBackgroundColor: '#fff',

        deleteIconBackgroundColor: '#efefff',
        deleteIconBackgroundColorHover: '#ffffff',

        borderColor: '#e9e9e9',
    },

    // font-size: ${({ theme }) => theme.fontSize.s};
    fontSize: {
        xxl: '36px',
        xl: '24px',
        l: '18px',
        m: '14px',
        s: '11px',
    },

    fontWeight: {
        bold: '500',
        semiBold: '600',
        bolder: '700'
    },

    borderRadius: {
        xs: '4px',
        s: '8px',
        m: '16px',
    },

  // padding: ${({ theme }) => theme.indents.s};
  // margin: ${({ theme }) => theme.indents.s};
  indents: {
        xs: '4px',
        s: '8px',
        m: '16px',
        l: '24px',
        xl: '32px',
        xxl: '40px',
    },

    boxShadow: {
        primary: '0px 10px 70px rgb(0 0 0 / 15%)',
    },

    height: {
        input: '56px',
    }
};

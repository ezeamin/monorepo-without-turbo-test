const { MODULE_HOME_URL, MODULE_BACKOFFICE_PSAE_URL } = process.env;

const multizones = {
  async rewrites() {
    return [
      {
        source: '/',
        destination: MODULE_HOME_URL || '',
      },
      {
        source: '/backoffice-psae',
        destination: `${MODULE_BACKOFFICE_PSAE_URL || ''}`,
      },
      {
        source: '/backoffice-psae/:path*',
        destination: `${MODULE_BACKOFFICE_PSAE_URL || ''}/:path*`,
      },
    ];
  },
};

module.exports = multizones;

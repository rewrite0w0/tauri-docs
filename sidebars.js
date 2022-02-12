const about = [
  'about/intro',
  'about/architecture',
  'about/security',
  'about/governance',
  'about/book',
  {
    type: 'link',
    label: 'Benchmarks',
    href: '/benchmarks',
  },
]

const docs = [
  {
    'Getting Started': [
      'getting-started/prerequisites',
      {
        Setup: [
          'getting-started/setting-up-linux',
          'getting-started/setting-up-macos',
          'getting-started/setting-up-windows',
        ],
      },
      'getting-started/beginning-tutorial',
    ],
    Development: [
      'development/security',
      'development/development-cycle',
      'development/updating-dependencies',
    ],
    Architecture: [
      'architecture/build-tools-node',
      'architecture/frontend-frameworks',
      {
        Patterns: [
          'architecture/patterns/brownfield',
          'architecture/patterns/isolation',
        ]
      },
      {
        Recipes: [
          'architecture/recipes/about-recipes',
          'architecture/recipes/hermit',
          'architecture/recipes/bridge',
          'architecture/recipes/cloudish',
          'architecture/recipes/cloudbridge',
          'architecture/recipes/lockdown',
          'architecture/recipes/multiwin',
          'architecture/recipes/glui',
        ],
      },
    ],
    Guides: [
      'guides/cli',
      'guides/command',
      'guides/events',
      'guides/plugin',
      'guides/icons',
      'guides/splashscreen',
      'guides/window-customization',
      'guides/menu',
      'guides/system-tray',
    ],
    Debugging: ['debugging/debugging'],
    Testing: [
      {
        'WebDriver Testing': [
          'testing/webdriver/introduction',
          {
            'Example Application': [
              'testing/webdriver/example/setup',
              'testing/webdriver/example/webdriverio',
              'testing/webdriver/example/selenium',
            ],
          },
          'testing/webdriver/ci',
        ],
      },
    ],
    Building: [
      'building/introduction',
      'building/cross-platform',
      'building/app-size',
      'building/sidecar',
      'building/debian',
    ],
    Distribution: [
      'distribution/publishing',
      'distribution/macos',
      'distribution/sign-macos',
      'distribution/updater',
      'distribution/sign-windows',
    ],
  },
  'faq',
]

const api = [
  'api/config',
  'api/cli',
  {
    type: 'link',
    label: 'Rust (via Docs.rs)',
    href: 'https://docs.rs/tauri/1.0.0-rc.0/',
  },
  {
    type: 'category',
    label: 'JavaScript / TypeScript',
    link: {
      type: 'doc',
      id: 'api/js/index',
    },
    items: [
      {
        type: 'autogenerated',
        dirName: 'api/js/modules',
      },
    ],
  },
]

const community = ['community/contributor-guide', 'community/ci-cd']

module.exports = {
  about,
  docs,
  api,
  community,
}

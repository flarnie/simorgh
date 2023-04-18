const uploader = [
  {
    id: '2488a6c7',
    type: 'aresUploader',
    model: {
      openingTime: '',
      closingTime: '',
      signinRequired: false,
      campaignStatus: 'open',
      blocks: [
        {
          id: '7bc611ad',
          type: 'title',
          model: {
            blocks: [
              {
                id: 'ff83ac2d',
                type: 'text',
                model: {
                  blocks: [
                    {
                      id: '5a40fc62',
                      type: 'paragraph',
                      model: {
                        text: 'Get involved',
                        blocks: [
                          {
                            id: 'e29b1166',
                            type: 'fragment',
                            model: {
                              text: 'Get involved',
                              attributes: [],
                            },
                            position: [1, 1, 1, 1, 1, 1],
                          },
                        ],
                      },
                      position: [1, 1, 1, 1, 1],
                    },
                  ],
                },
                position: [1, 1, 1, 1],
              },
            ],
          },
          position: [1, 1, 1],
        },
        {
          id: '84300d50',
          type: 'text',
          model: {
            blocks: [
              {
                id: '32cae5cf',
                type: 'paragraph',
                model: {
                  text: 'UGC Core Features 1 - Custom Form',
                  blocks: [
                    {
                      id: '059ad032',
                      type: 'fragment',
                      model: {
                        text: 'UGC Core Features 1 - Custom Form',
                        attributes: [],
                      },
                      position: [1, 1, 2, 1, 1],
                    },
                  ],
                },
                position: [1, 1, 2, 1],
              },
            ],
          },
          position: [1, 1, 2],
        },
        {
          id: 'd220c862',
          type: 'link',
          model: {
            locator:
              'urn:bbc:content:url-promo:https%3A%2F%2Fwww.bbc.com%2Fsend%2Fu94753086',
            blocks: [
              {
                id: 'f2c76b0a',
                type: 'text',
                model: {
                  blocks: [
                    {
                      id: '172eb0d5',
                      type: 'paragraph',
                      model: {
                        text: 'Send form',
                        blocks: [
                          {
                            id: '9e67d4d4',
                            type: 'urlLink',
                            model: {
                              text: 'Send form',
                              locator: 'https://www.bbc.com/send/u94753086',
                              blocks: [
                                {
                                  id: 'b31d1113',
                                  type: 'fragment',
                                  model: {
                                    text: 'Send form',
                                    attributes: [],
                                  },
                                  position: [1, 1, 3, 1, 1, 1, 1],
                                },
                              ],
                            },
                            position: [1, 1, 3, 1, 1, 1],
                          },
                        ],
                      },
                      position: [1, 1, 3, 1, 1],
                    },
                  ],
                },
                position: [1, 1, 3, 1],
              },
            ],
          },
          position: [1, 1, 3],
        },
        {
          id: 'f21ce980',
          type: 'aresSendCTA',
          model: {
            blocks: [
              {
                id: '075d32c5',
                type: 'text',
                model: {
                  blocks: [
                    {
                      id: 'd6deb3ba',
                      type: 'paragraph',
                      model: {
                        text: 'Send form',
                        blocks: [
                          {
                            id: 'b1cdac2a',
                            type: 'fragment',
                            model: {
                              text: 'Send form',
                              attributes: [],
                            },
                            position: [1, 1, 4, 1, 1, 1],
                          },
                        ],
                      },
                      position: [1, 1, 4, 1, 1],
                    },
                  ],
                },
                position: [1, 1, 4, 1],
              },
            ],
          },
          position: [1, 1, 4],
        },
      ],
    },
    position: [1, 1],
  },
];

const uploaderWithIncorrectType = [
  {
    id: '2488a6c7',
    type: 'aDifferentTypeOfUploader',
    model: {
      openingTime: '',
      closingTime: '',
      signinRequired: false,
      campaignStatus: 'open',
      blocks: [
        {
          id: '7bc611ad',
          type: 'title',
          model: {
            blocks: [
              {
                id: 'ff83ac2d',
                type: 'text',
                model: {
                  blocks: [
                    {
                      id: '5a40fc62',
                      type: 'paragraph',
                      model: {
                        text: 'Get involved',
                        blocks: [
                          {
                            id: 'e29b1166',
                            type: 'fragment',
                            model: {
                              text: 'Get involved',
                              attributes: [],
                            },
                            position: [1, 1, 1, 1, 1, 1],
                          },
                        ],
                      },
                      position: [1, 1, 1, 1, 1],
                    },
                  ],
                },
                position: [1, 1, 1, 1],
              },
            ],
          },
          position: [1, 1, 1],
        },
        {
          id: '84300d50',
          type: 'text',
          model: {
            blocks: [
              {
                id: '32cae5cf',
                type: 'paragraph',
                model: {
                  text: 'UGC Core Features 1 - Custom Form',
                  blocks: [
                    {
                      id: '059ad032',
                      type: 'fragment',
                      model: {
                        text: 'UGC Core Features 1 - Custom Form',
                        attributes: [],
                      },
                      position: [1, 1, 2, 1, 1],
                    },
                  ],
                },
                position: [1, 1, 2, 1],
              },
            ],
          },
          position: [1, 1, 2],
        },
        {
          id: 'd220c862',
          type: 'link',
          model: {
            locator:
              'urn:bbc:content:url-promo:https%3A%2F%2Fwww.bbc.com%2Fsend%2Fu94753086',
            blocks: [
              {
                id: 'f2c76b0a',
                type: 'text',
                model: {
                  blocks: [
                    {
                      id: '172eb0d5',
                      type: 'paragraph',
                      model: {
                        text: 'Send form',
                        blocks: [
                          {
                            id: '9e67d4d4',
                            type: 'urlLink',
                            model: {
                              text: 'Send form',
                              locator: 'https://www.bbc.com/send/u94753086',
                              blocks: [
                                {
                                  id: 'b31d1113',
                                  type: 'fragment',
                                  model: {
                                    text: 'Send form',
                                    attributes: [],
                                  },
                                  position: [1, 1, 3, 1, 1, 1, 1],
                                },
                              ],
                            },
                            position: [1, 1, 3, 1, 1, 1],
                          },
                        ],
                      },
                      position: [1, 1, 3, 1, 1],
                    },
                  ],
                },
                position: [1, 1, 3, 1],
              },
            ],
          },
          position: [1, 1, 3],
        },
        {
          id: 'f21ce980',
          type: 'aresSendCTA',
          model: {
            blocks: [
              {
                id: '075d32c5',
                type: 'text',
                model: {
                  blocks: [
                    {
                      id: 'd6deb3ba',
                      type: 'paragraph',
                      model: {
                        text: 'Send form',
                        blocks: [
                          {
                            id: 'b1cdac2a',
                            type: 'fragment',
                            model: {
                              text: 'Send form',
                              attributes: [],
                            },
                            position: [1, 1, 4, 1, 1, 1],
                          },
                        ],
                      },
                      position: [1, 1, 4, 1, 1],
                    },
                  ],
                },
                position: [1, 1, 4, 1],
              },
            ],
          },
          position: [1, 1, 4],
        },
      ],
    },
    position: [1, 1],
  },
];

const missingAresUploader = undefined;

export { uploader, uploaderWithIncorrectType, missingAresUploader };

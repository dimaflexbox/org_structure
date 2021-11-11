import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        // structureList: [
        //     {
        //         task: 'Task 1',
        //         isCompleated: false,
        //     },
        //     {
        //         task: 'Task 2',
        //         isCompleated: false,
        //     },
        //     {
        //         task: 'Task 3',
        //         isCompleated: false,
        //     },
        // ],
        structureList: [
          {
            "name": "Алматы",
            "count": 100,
            "children": [
              {
                "name": "Управление 1",
                "count": 50,
                "children": [
                  {
                    "name": "Отдел 1",
                    "count": 25,
                    "children": []
                  },
                  {
                    "name": "Отдел 2",
                    "count": 25,
                    "children": []
                  }
                ]
              },
              {
                "name": "Управление 2",
                "count": 50,
                "children": [
                  {
                    "name": "Отдел 1",
                    "count": 25,
                    "children": []
                  },
                  {
                    "name": "Отдел 2",
                    "count": 25,
                    "children": []
                  }
                ]
              }
            ]
          },
          {
            "name": "Уральск",
            "count": 100,
            "children": [
              {
                "name": "Управление 1",
                "count": 50,
                "children": [
                  {
                    "name": "Отдел 1",
                    "count": 25,
                    "children": []
                  },
                  {
                    "name": "Отдел 2",
                    "count": 25,
                    "children": []
                  }
                ]
              },
              {
                "name": "Управление 2",
                "count": 50,
                "children": [
                  {
                    "name": "Отдел 1",
                    "count": 25,
                    "children": []
                  },
                  {
                    "name": "Отдел 2",
                    "count": 25,
                    "children": []
                  }
                ]
              }
            ]
          },
          {
            "name": "Петропавловск",
            "count": 100,
            "children": [
              {
                "name": "Управление 1",
                "count": 50,
                "children": [
                  {
                    "name": "Отдел 1",
                    "count": 25,
                    "children": []
                  },
                  {
                    "name": "Отдел 2",
                    "count": 25,
                    "children": []
                  }
                ]
              },
              {
                "name": "Управление 2",
                "count": 50,
                "children": [
                  {
                    "name": "Отдел 1",
                    "count": 25,
                    "children": []
                  },
                  {
                    "name": "Отдел 2",
                    "count": 25,
                    "children": []
                  }
                ]
              }
            ]
          },
        ],
    },
    getters: {
      GETSTRUCTURELIST(state) {
        return state.structureList;
      },
    },
    mutations: {
      
    },
});
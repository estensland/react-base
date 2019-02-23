module Api
  module V1
    class PeopleController < ApplicationController
      def index
        render json: Person.all
      end

      def create
        person = Person.create(person_params)
        render json: person
      end

      def destroy
        Person.destroy(params[:id])
      end

      def update
        person = Person.find(params[:id])
        Person.update_attributes(person_params)
        render json: person
      end

      private

      def person_params
        params.require(:person).permit(:name, :description)
      end
    end
  end
end
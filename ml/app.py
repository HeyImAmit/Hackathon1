...

































# from fastapi import FastAPI
# from main import extract_measurements, convert_to_grams
# from predict_category import get_ingredient_category
# from predict_missing_densities import predict_densities

# app = FastAPI()

# @app.get("/")
# def home():
#     return {"message": "Welcome to Baking AI Backend!"}

# from fastapi import HTTPException

# @app.get("/convert/")
# def convert_ingredient(text: str):
#     try:
#         quantity, unit, ingredient = extract_measurements(text)
#         grams = convert_to_grams(text)
#         return {"ingredient": ingredient, "quantity": quantity, "unit": unit, "grams": grams}
#     except Exception as e:
#         raise HTTPException(status_code=500, detail=str(e))

# @app.get("/predict_category/")
# def predict_category(ingredient: str):
#     category = get_ingredient_category(ingredient)
#     return {"ingredient": ingredient, "category": category}

# @app.get("/predict_density/")
# def predict_density(ingredient: str):
#     ingredient, predicted_density_ml, predicted_density_cup, cate, predicted_type = predict_densities(ingredient)
#     return {
#         "ingredient": ingredient,
#         "density_ml": predicted_density_ml,
#         "density_cup": predicted_density_cup,
#         "category": cate,
#         "type": predicted_type
#     }

# # Run the app using: uvicorn app:app --reload